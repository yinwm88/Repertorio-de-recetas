import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado, RecetaDto, RecetaIngredientesDto, CrearRecetaDto, EditarRecetaDto, RecetaUtensiliosDto } from "../../domain";

export class RecetaService {

    constructor(){};

    async generarRecetas(correo : string) {
        const correoExiste = await prisma.usuario.findFirst({
            where : { correo: correo }
        });

        if ( !correoExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );

        try {

            const resultado = [];

            const idRecetas = await prisma.receta.findMany({
                select: { idreceta: true }
            });
            const idLista = idRecetas.map(receta => receta.idreceta);
    
            const utensiliosUsuario = await prisma.poseer.findMany({
                where : { correo : correo},
                select : { idelectro : true }
            });
            const utensiliosLista = utensiliosUsuario.map(utensilio => utensilio.idelectro)
    
            const ingredientesUsuario = await prisma.teneringrediente.findMany({
                where: { correo },
                select: { 
                        idingrediente: true,
                        cantidad: true 
                        },
            });
    
            for (let index = 0; index < idLista.length; index++) {
                const ingredientesReceta = await prisma.haberingrediente.findMany({
                    where: { idreceta: idLista[index] },
                    select: {
                            idingrediente : true,
                            cantidad : true
                    }
                });
    
                const utensiliosReceta = await prisma.necesitar.findMany({
                    where: { idreceta: idLista[index] },
                    select: { idelectro: true },
                });
    
                const utensiliosRecetaLista = utensiliosReceta.map(utensilio => utensilio.idelectro)
                const utensiliosFaltantes = utensiliosRecetaLista.filter( utensilio => utensiliosLista.indexOf(utensilio) == -1)
                let ingredientesUsuarioTotal = 0;
                let ingredientesRecetaTotal = 0;

                const ingredientesYcantidades = ingredientesReceta.map(ingredienteReceta => {
                    const ingredienteUsuario = ingredientesUsuario.find(ingredienteUsuario => ingredienteUsuario.idingrediente === ingredienteReceta.idingrediente);
                    ingredientesRecetaTotal++;
                    if (ingredienteUsuario && Number(ingredienteUsuario.cantidad) >= ingredienteReceta.cantidad) {
                        ingredientesUsuarioTotal++;
                    }
                    if (!ingredienteUsuario) {
                        return { idingrediente: ingredienteReceta.idingrediente, cantidadFaltante: ingredienteReceta.cantidad };
                    } else if (Number(ingredienteUsuario.cantidad) < ingredienteReceta.cantidad) {
                        return { idingrediente: ingredienteReceta.idingrediente, cantidadFaltante: ingredienteReceta.cantidad - Number(ingredienteUsuario.cantidad) };
                    } else {
                        return { idingrediente: ingredienteReceta.idingrediente, cantidadFaltante: 0 };
                    }
                }).filter(ingrediente => ingrediente.cantidadFaltante > 0);

                const porcentajeIngredientes = Number(((ingredientesUsuarioTotal / ingredientesRecetaTotal) * 100).toFixed(2));

                const receta = {
                    idReceta : idLista[index],
                    porcentaje : porcentajeIngredientes,
                    ingredientes : ingredientesYcantidades,
                    utensiliosFaltantes : utensiliosFaltantes
                }

                resultado.push(receta)
            }
            return { recetas : resultado }

        }catch(error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async marcarFavorita(idReceta:number, correo: string) {

        const correoExiste = await prisma.usuario.findFirst({
            where : { correo: correo }
        })
        if( !correoExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' )

        const recetaExiste = await prisma.receta.findFirst({
            where : {idreceta: idReceta}
        })
        if ( !recetaExiste ) throw ErrorCustomizado.badRequest( 'La receta no existe' )

        try {
            const favorita = await prisma.preferir.create({
                data: {
                    idreceta: idReceta,
                    correo: correo
                }
            });

            const likear = await prisma.receta.updateMany({
                where : { idreceta : idReceta },
                data : {  
                    likes : {
                        increment : 1
                    }
                 }
            });

            return {
                idreceta: favorita.idreceta
            };
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }

    }

    async recetasFavoritas(correo: string){
        const correoExiste = await prisma.usuario.findFirst({
            where : { correo: correo }
        });
        if( !correoExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' )
        
        try {
            const favoritas = await prisma.preferir.findMany({
                where: {correo : correo},
                select : { idreceta : true }
            });
            return { recetas: favoritas};
        }catch(error){
            throw ErrorCustomizado.internalServer( `${error}` );
        }
    }

    async datosReceta( idReceta: number ){
        const receta = await prisma.receta.findUnique({
            where : {idreceta : idReceta}
        });
        if ( !receta ) throw ErrorCustomizado.noEncontrado('No existe la receta')
        try {
            const ingredientes = await prisma.haberingrediente.findMany({
                where : {idreceta : idReceta},
                select : {
                    idingrediente : true,
                    cantidad : true
                }
            });
            const variaciones = await prisma.receta.findMany({
                where: { padre: receta.idreceta },
                take: 10,
                orderBy: { likes: 'asc' },
                select: {
                    nombre: true,
                    idreceta: true
                },
            });
            const utensilios = await prisma.necesitar.findMany({
                where : { idreceta : idReceta},
                select : {idelectro : true}
            });
            const tipos = await prisma.tiporeceta.findMany({
                where : { idreceta : idReceta},
                select : {tipo : true}
            });
            return {
                nombre: receta?.nombre,
                tiempo: receta?.tiempo,
                proceso: receta?.proceso,
                tipos : tipos,
                likes : receta?.likes,
                ingredientes : ingredientes,
                utensilios : utensilios,
                variaciones: variaciones
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async crearReceta( datosReceta: CrearRecetaDto, usuario: EntidadUsuario, ingredientes: RecetaIngredientesDto, utensilios: RecetaUtensiliosDto ) {
        const usuarioExiste = await prisma.usuario.findUnique( {
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        utensilios.utensilios.forEach( async utensilio => {
            await prisma.electrodomestico.findFirstOrThrow({
                where: { idelectro: +utensilio.idUtensilio}
            });
        });
        try {
            const recetaNueva = await prisma.receta.create({
                data: {
                    nombre: datosReceta.nombre,
                    tiempo: datosReceta.tiempo,
                    proceso: datosReceta.proceso,
                    correo: usuario.correo
                }    
            }); 

            ingredientes.ingredientes.forEach( async ingrediente => {
                await prisma.haberingrediente.create({
                    data: {
                        idreceta: recetaNueva.idreceta ,
                        idingrediente: +ingrediente.idIngrediente,
                        cantidad: +ingrediente.cantidad
                    }
                });
            });

            utensilios.utensilios.forEach( async utensilio => {
                await prisma.necesitar.create({
                    data: {
                        idreceta: recetaNueva.idreceta ,
                        idelectro: +utensilio.idUtensilio
                    }
                });
            });

            return {
                recta:{
                    nombre: recetaNueva.nombre,
                    tiempo: recetaNueva.tiempo,
                    proceso: recetaNueva.proceso,
                    ingredientes: ingredientes.ingredientes,
                    utensilios: utensilios.utensilios
                },
                correo: usuario.correo
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async crearVariacionReceta( datosReceta: EditarRecetaDto, usuario: EntidadUsuario, ingredientes: RecetaIngredientesDto, utensilios: RecetaUtensiliosDto) {
        const usuarioExiste = await prisma.usuario.findUnique( {
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        
        try {
            const recetaNueva = await prisma.receta.create({
                data: {
                    nombre: datosReceta.nombre,
                    tiempo: datosReceta.tiempo,
                    proceso: datosReceta.proceso,
                    correo: usuario.correo,
                    padre: datosReceta.idReceta
                }    
            }); 

            ingredientes.ingredientes.forEach( async ingrediente => {
                await prisma.haberingrediente.create({
                    data: {
                        idreceta: recetaNueva.idreceta ,
                        idingrediente: +ingrediente.idIngrediente,
                        cantidad: +ingrediente.cantidad
                    }
                });
            });

            utensilios.utensilios.forEach( async utensilio => {
                await prisma.necesitar.create({
                    data: {
                        idreceta: recetaNueva.idreceta ,
                        idelectro: +utensilio.idUtensilio
                    }
                });
            });


            return {
                recta:{
                    idReceta: recetaNueva.idreceta,
                    nombre: recetaNueva.nombre,
                    tiempo: recetaNueva.tiempo,
                    proceso: recetaNueva.proceso,
                    recetaPadre: recetaNueva.padre,
                    likes: recetaNueva.likes,
                    ingredientes: ingredientes.ingredientes,
                },
                correo: usuario.correo
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async editarReceta ( datosReceta: EditarRecetaDto, usuario: EntidadUsuario, ingredientes: RecetaIngredientesDto,  utensilios: RecetaUtensiliosDto ) {
        const usuarioExiste = await prisma.usuario.findUnique( {
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        const recetaExiste = await prisma.receta.findUnique( {
            where: { idreceta: datosReceta.idReceta }
        });
        if ( !recetaExiste ) throw ErrorCustomizado.badRequest( 'La receta no existe' );
        if ( !recetaExiste.correo ) throw ErrorCustomizado.badRequest( 'La receta no puede ser editada' );
        if ( recetaExiste.correo !== usuarioExiste.correo ) throw ErrorCustomizado.noAutorizado( 'La receta no pertenece a este usuario' );

        try {
            const recetaActualizada = await prisma.receta.update({
                where:{
                    idreceta: datosReceta.idReceta
                },
                data: {
                    nombre: datosReceta.nombre,
                    tiempo: datosReceta.tiempo,
                    proceso: datosReceta.proceso
                }    
            });

            await prisma.haberingrediente.deleteMany({
                where: {
                    idreceta: recetaActualizada.idreceta
                }
            });

            ingredientes.ingredientes.forEach( async ingrediente => {
                await prisma.haberingrediente.create({
                    data: {
                        idreceta: recetaActualizada.idreceta ,
                        idingrediente: +ingrediente.idIngrediente,
                        cantidad: +ingrediente.cantidad
                    }
                });
            });

            await prisma.necesitar.deleteMany({
                where: {
                    idreceta: recetaActualizada.idreceta
                }
            });

            utensilios.utensilios.forEach( async utensilio => {
                await prisma.necesitar.create({
                    data: {
                        idreceta: recetaActualizada.idreceta ,
                        idelectro: +utensilio.idUtensilio
                    }
                });
            });

            return {
                recta:{
                    nombre: recetaActualizada?.nombre,
                    tiempo: recetaActualizada?.tiempo,
                    proceso: recetaActualizada?.proceso,
                    ingredientes: ingredientes.ingredientes
                },
                correo: usuario.correo
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async eliminarReceta ( datosReceta: RecetaDto, usuario: EntidadUsuario ) {
        const usuarioExiste = await prisma.usuario.findUnique( {
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        const recetaExiste = await prisma.receta.findUnique( {
            where: { idreceta: datosReceta.idReceta }
        });
        if ( !recetaExiste ) throw ErrorCustomizado.badRequest( 'La receta no existe' );
        
        try {
            const recetaEliminada = await prisma.receta.delete({
                where: {
                    idreceta: datosReceta.idReceta
                }
            });

            return {
                recta:{
                    nombre: recetaEliminada?.nombre,
                    tiempo: recetaEliminada?.tiempo,
                    proceso: recetaEliminada?.proceso
                },
                correo: usuario.correo
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async obtenerRecetasUsuario( usuario: EntidadUsuario ){
        const usuarioExiste = await prisma.usuario.findUnique( {
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        try {

            const recetas = await prisma.receta.findMany({
                where:{correo: usuarioExiste.correo}
            });
            
            return{
                recetas: recetas
            }
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async borrarReceta(correo : string, idReceta: number){
        const recetaExiste = await prisma.receta.findFirst({
            where : { idreceta : idReceta },
            select : { correo : true }
        });
        if( !recetaExiste ) throw ErrorCustomizado.badRequest( 'La receta no existe' );
        if ( recetaExiste.correo !== correo ) throw ErrorCustomizado.badRequest( 'El usuario proporcionado no puede eliminar esta receta' );

        try {
            const recetaEliminada = await prisma.receta.delete({
                where : { idreceta : idReceta }
            });
            return {
                recetaEliminada
            };
        } catch(error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    //TODO: Implementar esta cosa
    async crearListaCompra(correo: string, idReceta : number){}
}