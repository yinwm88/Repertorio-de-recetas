import { Decimal } from "@prisma/client/runtime/library";
import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado, RecetaDto, RecetaIngredientesDto, CrearRecetaDto, EditarRecetaDto, RecetaUtensiliosDto, CrearReceta, EditarReceta, IngredienteUsuario, IngredienteReceta } from "../../domain";
import { FireBase } from "../../config/FireBase";

interface InformacionIngrediente {
    idingrediente: number;
    cantidad: Decimal | number;
    elimina?: boolean;
}

export class RecetaService {

    constructor(){};


    private async alergias(correo:string){
        const alergias = await prisma.seralergico.findMany({
            where : { correo : correo},
            select : { idingrediente : true }
        });
        const alergiasLista = alergias.map(ingrediente => ingrediente.idingrediente);
        return alergiasLista;
    }

    private async utensilios(correo:string){
        const utensiliosUsuario = await prisma.poseer.findMany({
            where : { correo : correo},
            select : { idelectro : true }
        });
        const utensiliosLista = utensiliosUsuario.map(utensilio => utensilio.idelectro);
        return utensiliosLista;
    }
    
    private async idRecetas(){
        const idRecetas = await prisma.receta.findMany({
            select: { idreceta: true }
        });
        const idLista = idRecetas.map(receta => receta.idreceta);
        return idLista;
    }

    private async ingrdientes(correo:string) {
        const ingredientesUsuario = await prisma.teneringrediente.findMany({
            where: { correo },
            select: { 
                    idingrediente: true,
                    cantidad: true 
                    },
        });
        return ingredientesUsuario;
    }

    async generarRecetas(correo : string) {
        const correoExiste = await prisma.usuario.findFirst({
            where : { correo: correo }
        });

        if ( !correoExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );

        try {

            const resultado = [];
            const alergiasLista = await this.alergias(correo);
            const idLista = await this.idRecetas();
            const utensiliosLista = await this.utensilios(correo);
            const ingredientesUsuario = await this.ingrdientes(correo);

            for (let index = 0; index < idLista.length; index++) {
                
                const ingredientesReceta = await prisma.haberingrediente.findMany({
                    where: { idreceta: idLista[index] },
                    select: {
                            idingrediente : true,
                            cantidad : true
                    }
                });

                if (alergiasLista.some(ingrediente => ingredientesReceta.map(ingredienteReceta => ingredienteReceta.idingrediente).includes(ingrediente))) continue;
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

            const like = await prisma.preferir.findFirst({
                where : {idreceta : idReceta,
                        correo : correo
                }
            });

            if(like){
                const deslike = await prisma.preferir.deleteMany({
                    where : {correo : correo,
                            idreceta : idReceta
                            }
                });
                const reduceLikes = await prisma.receta.updateMany({
                    where : { idreceta : idReceta},
                    data : {
                        likes : {
                            decrement : 1
                        }
                    }
                });
                return {'Se eliminó el like': idReceta};
            }
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

            return {'Se agregó el like': favorita.idreceta};
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
                variaciones: variaciones,
                imagen : receta.imagen
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async crearReceta( informacionReceta: CrearReceta ) {
        const { datosReceta, usuario, ingredientes, utensilios } = informacionReceta;
        const usuarioExiste = await prisma.usuario.findUnique( {
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );

        await Promise.all(ingredientes.ingredientes.map(async ingrediente => {
            const existeIngrediente = await prisma.ingrediente.findUnique({
                where: {
                    idingrediente: +ingrediente.idIngrediente
                }
            });
            if (!existeIngrediente) throw ErrorCustomizado.badRequest('El ingrediente no existe');
        }));

        await Promise.all(utensilios.utensilios.map(async utensilios => {
            const existeUtensilio = await prisma.electrodomestico.findUnique({
                where: {
                    idelectro: +utensilios.idUtensilio
                }
            });
            if (!existeUtensilio) throw ErrorCustomizado.badRequest('El Utensilio no existe');
        }));

        try {
            const recetaNueva = await prisma.receta.create({
                data: {
                    nombre: datosReceta.nombre,
                    tiempo: datosReceta.tiempo,
                    proceso: datosReceta.proceso,
                    correo: usuario.correo,
                    imagen: datosReceta.imagen,
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

    async crearVariacionReceta( informacionReceta: EditarReceta ) {
        const { datosReceta, usuario, ingredientes, utensilios, imagen } = informacionReceta;
        const usuarioExiste = await prisma.usuario.findUnique( {
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        await Promise.all(ingredientes.ingredientes.map(async ingrediente => {
            const existeIngrediente = await prisma.ingrediente.findUnique({
                where: {
                    idingrediente: +ingrediente.idIngrediente
                }
            });
            if (!existeIngrediente) throw ErrorCustomizado.badRequest('El ingrediente no existe');
        }));

        await Promise.all(utensilios.utensilios.map(async utensilios => {
            const existeUtensilio = await prisma.electrodomestico.findUnique({
                where: {
                    idelectro: +utensilios.idUtensilio
                }
            });
            if (!existeUtensilio) throw ErrorCustomizado.badRequest('El Utensilio no existe');
        }));

        
        try {
            const recetaNueva = await prisma.receta.create({
                data: {
                    nombre: datosReceta.nombre,
                    tiempo: datosReceta.tiempo,
                    proceso: datosReceta.proceso,
                    correo: usuario.correo,
                    padre: datosReceta.idReceta,
                    imagen: imagen
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
                        idelectro: utensilio.idUtensilio
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

    async editarReceta ( informacionReceta: EditarReceta ) {
        const { datosReceta, usuario, ingredientes, utensilios } = informacionReceta;
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

        await Promise.all(ingredientes.ingredientes.map(async ingrediente => {
            const existeIngrediente = await prisma.ingrediente.findUnique({
                where: {
                    idingrediente: +ingrediente.idIngrediente
                }
            });
            if (!existeIngrediente) throw ErrorCustomizado.badRequest('El ingrediente no existe');
        }));

        await Promise.all(utensilios.utensilios.map(async utensilios => {
            const existeUtensilio = await prisma.electrodomestico.findUnique({
                where: {
                    idelectro: +utensilios.idUtensilio
                }
            });
            if (!existeUtensilio) throw ErrorCustomizado.badRequest('El Utensilio no existe');
        }));


        try {
            const recetaActualizada = await prisma.receta.update({
                where:{
                    idreceta: datosReceta.idReceta
                },
                data: {
                    nombre: datosReceta.nombre,
                    tiempo: datosReceta.tiempo,
                    proceso: datosReceta.proceso,
                    imagen: datosReceta.imagen
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
                        idreceta: +datosReceta.idReceta,
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
                        idelectro: utensilio.idUtensilio
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
                receta:{
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

    async crearListaCompra(correo: string, idReceta : number){
        const usuarioExiste = await prisma.usuario.findFirst({
            where : {correo : correo}
        });
        const recetaExiste = await prisma.receta.findFirst({
            where : {idreceta : idReceta }
        });
        if(!usuarioExiste) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        if(!recetaExiste) throw ErrorCustomizado.badRequest( 'La receta no existe' )
        
        try{
            const ingredientesUsuario = await prisma.teneringrediente.findMany({
                where : { correo : correo },
                select : {
                    idingrediente : true,
                    cantidad : true
                }
            });
            const ingredientesReceta = await prisma.haberingrediente.findMany({
                where : { idreceta : idReceta},
                select : {
                    idingrediente : true, 
                    cantidad : true
                }
            });
    
            const ingredientesFaltantes = [];
    
            for (const ingredienteReceta of ingredientesReceta) {
                const ingredienteUsuario = ingredientesUsuario.find(ingredienteUsuario => ingredienteUsuario.idingrediente === ingredienteReceta.idingrediente);

                if (!ingredienteUsuario) {
                    ingredientesFaltantes.push({
                        idingrediente: ingredienteReceta.idingrediente,
                        cantidad: ingredienteReceta.cantidad
                    });
                    continue;
                } 

                if (Number(ingredienteUsuario.cantidad) < ingredienteReceta.cantidad) {
                    ingredientesFaltantes.push({
                        idingrediente: ingredienteReceta.idingrediente,
                        cantidad: ingredienteReceta.cantidad - Number(ingredienteUsuario.cantidad)
                    });
                }
            }

            ingredientesFaltantes.forEach(async ingrediente => {

                const ingredienteExiste = await prisma.compraringrediente.findFirst({
                    where : {
                        correo : correo,
                        idingrediente : ingrediente.idingrediente
                    }
                });

                if (ingredienteExiste){
                    await prisma.compraringrediente.updateMany({
                        where : {
                            correo : correo,
                            idingrediente : ingrediente.idingrediente
                        },
                        data : {
                            cantidad : {
                                increment : ingrediente.cantidad
                            }
                        }
                    });
                } else {
                    await prisma.compraringrediente.create({
                    data : {
                        correo : correo,
                        idingrediente : ingrediente.idingrediente,
                        cantidad : ingrediente.cantidad
                        }
                    });
                }
            });
            return "Lista de compra creada";
        } catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }   
    
    verificarIngrediente( ingredientesReceta: InformacionIngrediente[] , ingredientesUsuario: InformacionIngrediente[] ): InformacionIngrediente[] {
        for (let i = 0; i < ingredientesReceta.length; i++) {
            for (let j = 0; j < ingredientesUsuario.length; j++) {
                if ( ingredientesReceta[i].idingrediente === ingredientesUsuario[j].idingrediente ) {
                    ingredientesUsuario[j].elimina = false;
                    if ( Number(ingredientesReceta[i].cantidad) === Number(ingredientesUsuario[j].cantidad) ) {
                        ingredientesUsuario[j].elimina = true;
                    }
                    ingredientesUsuario[j].cantidad = Number(ingredientesUsuario[j].cantidad) - Number(ingredientesReceta[i].cantidad);
                }
            }
        }
        return ingredientesUsuario;
    }
    

    async cocinar(correo:string, idReceta:number, calorias:number){
        const usuarioExiste = await prisma.usuario.findFirst({
            where : {correo : correo}
        });

        const recetaExiste = await prisma.receta.findFirst({
            where : {idreceta : idReceta }
        });
        if(!usuarioExiste) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        if(!recetaExiste) throw ErrorCustomizado.badRequest( 'La receta no existe' );
        if(calorias < 0) throw ErrorCustomizado.badRequest( 'Las calorías no pueden ser negativas' );
        
        try{
            const ingredientesReceta: InformacionIngrediente[] = await prisma.haberingrediente.findMany({
                where : { idreceta : idReceta },
                select : {
                    idingrediente : true,
                    cantidad : true
                }
            });
            const ingredientesUsuario = await this.ingrdientes( correo );
            const ingredientes = this.verificarIngrediente( ingredientesReceta, ingredientesUsuario );
            ingredientes.map(async ingrediente => {
                if ( ingrediente.elimina ) {
                    await prisma.teneringrediente.delete({
                        where:{                            
                            tenerId: {
                                correo : correo,
                                idingrediente : ingrediente.idingrediente
                            }
                        }
                    });
                } else {
                    await prisma.teneringrediente.update({
                        where: {
                            tenerId: {
                                correo : correo,
                                idingrediente : ingrediente.idingrediente
                            }
                        },
                        data : {
                            cantidad : ingrediente.cantidad
                        }
                    });
                }
            });
    
            const fecha = new Date()
            const recetaCocinada = await prisma.cocinar.create({
                data : {
                    idreceta : idReceta,
                    correo : correo,
                    calorias : calorias,
                    fecha : fecha
                }
            });
            return recetaCocinada;
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
        
    }

    async obtenerRecetasCocinadas(correo: string){
        const usuarioExiste = await prisma.usuario.findFirst({
            where : {correo : correo}
        });
        if(!usuarioExiste) throw ErrorCustomizado.badRequest( 'El usuario no existe' );

        try{
            const recetas = await prisma.cocinar.findMany({
                where : {
                    correo : correo
                },
                select : {
                    idreceta : true,
                    calorias : true,
                    fecha : true
                }
            });
    
            return recetas;
        }catch(error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
        
    }

    async subirImagen( imagen:any, idReceta: number ) {
        const recetaExiste = await prisma.receta.findUnique({
            where: { idreceta: idReceta }
        })
        if( !recetaExiste ) throw ErrorCustomizado.badRequest( 'La receta no existe' );
        const fb = new FireBase();
        const url = await fb.subirImagen( imagen );
        try {
            const receta = await prisma.receta.update({
                where: { idreceta: recetaExiste.idreceta },
                data: {
                    imagen: url
                }
            })
            return {
                urlImagen: receta.imagen
            }
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }
} 