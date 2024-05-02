import { prisma } from "../../data/postgres";
import { EntidadUsuario, EntidadReceta, ErrorCustomizado, IngredientesRecetasDto, RecetaDto, RecetaIngredientesDto, CrearRecetaDto, EditarRecetaDto } from "../../domain";

export class RecetaService {

    constructor(){};

    async generarRecetas(correo: string) {

        const correoExiste = await prisma.usuario.findFirst({
            where: { correo: correo }
        });
        if ( !correoExiste ) throw ErrorCustomizado.badRequest( 'El correo no existe' )

        try {
            const ingredientes = await prisma.teneringrediente.findMany({
                where: { correo: correo },
                select : { 
                        idingrediente: true,
                        cantidad: true
                        }
            });

            const cantidadRecetas = await prisma.receta.count();
            const ingredientesRecetas: number[][][] = [];
            const recetasListas = [];

            for (let index = 1; index <= cantidadRecetas; index++) {
                const ingredientesReceta = await prisma.haberingrediente.findMany({
                    where: { idreceta: index },
                    select: {
                            idingrediente : true,
                            cantidad : true
                    }
                });
                ingredientesRecetas.push([ingredientesReceta.map(ingrediente => ingrediente.idingrediente), ingredientesReceta.map(ingrediente => ingrediente.cantidad)]);
            }

            for (let index = 0; index < ingredientesRecetas.length; index++) {
                const ingredientesReceta = ingredientesRecetas[index][0];
                const cantidadesReceta = ingredientesRecetas[index][1];
            
                const tieneTodosLosIngredientes = ingredientesReceta.every(ingrediente =>
                    ingredientes.some(ing => ing.idingrediente === ingrediente)
                );
            
                const tieneCantidadesSuficientes = cantidadesReceta.every(cantidad =>
                    ingredientes.some(ing =>
                        ing.idingrediente === ingredientesReceta[cantidadesReceta.indexOf(cantidad)]
                        && Number(ing.cantidad) >= cantidad
                    )
                );
            
                if (tieneTodosLosIngredientes && tieneCantidadesSuficientes) {
                    recetasListas.push({ idreceta: index + 1 });
                }
            }

            return {recetas: recetasListas};
        } catch (error) {
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
            return {
                correo: favorita.correo,
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
                where: {correo : correo}
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
            const utensilios = await prisma.necesitar.findMany({
                where : { idreceta : idReceta}
            });
            return {
                nombre: receta?.nombre,
                tiempo: receta?.tiempo,
                proceso: receta?.proceso,
                ingredientes : ingredientes,
                utensilios : utensilios
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async crearReceta( datosReceta: CrearRecetaDto, usuario: EntidadUsuario, recetaIngredientesDto: RecetaIngredientesDto ) {
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
                    correo: usuario.correo
                }    
            }); 

            recetaIngredientesDto.ingredientes.forEach( async ingrediente => {
                await prisma.haberingrediente.create({
                    data: {
                        idreceta: recetaNueva.idreceta ,
                        idingrediente: +ingrediente.idIngrediente,
                        cantidad: +ingrediente.cantidad
                    }
                });
            });

            return {
                recta:{
                    nombre: recetaNueva.nombre,
                    tiempo: recetaNueva.tiempo,
                    proceso: recetaNueva.proceso,
                    ingredientes: recetaIngredientesDto.ingredientes
                },
                correo: usuario.correo
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async crearVariacionReceta( datosReceta: EditarRecetaDto, usuario: EntidadUsuario, recetaIngredientesDto: RecetaIngredientesDto ) {
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

            recetaIngredientesDto.ingredientes.forEach( async ingrediente => {
                await prisma.haberingrediente.create({
                    data: {
                        idreceta: recetaNueva.idreceta ,
                        idingrediente: +ingrediente.idIngrediente,
                        cantidad: +ingrediente.cantidad
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
                    ingredientes: recetaIngredientesDto.ingredientes,
                },
                correo: usuario.correo
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async editarReceta ( datosReceta: EditarRecetaDto, usuario: EntidadUsuario, recetaIngredientesDto: RecetaIngredientesDto ) {
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

            recetaIngredientesDto.ingredientes.forEach( async ingrediente => {
                await prisma.haberingrediente.create({
                    data: {
                        idreceta: recetaActualizada.idreceta ,
                        idingrediente: +ingrediente.idIngrediente,
                        cantidad: +ingrediente.cantidad
                    }
                });
            });


            return {
                recta:{
                    nombre: recetaActualizada?.nombre,
                    tiempo: recetaActualizada?.tiempo,
                    proceso: recetaActualizada?.proceso,
                    ingredientes: recetaIngredientesDto.ingredientes
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

    async recetasIncompletas(correo: string) {
        const [correoExiste, ingredientesUsuario] = await Promise.all([
            prisma.usuario.findFirst({ where: { correo } }),
            prisma.teneringrediente.findMany({
                where: { correo },
                select: { idingrediente: true },
            }),
        ]);
    
        if (!correoExiste) throw ErrorCustomizado.badRequest('No existe el usuario');
    
        const cantidadRecetas = await prisma.receta.count();
    
        const ingredientesReceta = await Promise.all(
            Array.from({ length: cantidadRecetas }, (_, index) =>
                prisma.haberingrediente.findMany({
                    where: { idreceta: index + 1 },
                    select: { idingrediente: true },
                }).then(ingredientes =>
                    ingredientes.map(ingrediente => ingrediente.idingrediente)
                )
            )
        );
    
        const recetasIncompletas = ingredientesReceta.map((ingredientes, index) => {
            const porcentaje = ingredientesUsuario.filter(ingredienteUsuario =>
                ingredientes.includes(ingredienteUsuario.idingrediente)
            ).length;
    
            return {
                idreceta: index + 1,
                porcentaje: ((porcentaje / ingredientes.length) * 100).toFixed(2),
            };
        });
    
        return { recetas: recetasIncompletas };
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
}