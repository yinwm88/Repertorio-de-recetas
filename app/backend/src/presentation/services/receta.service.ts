import { prisma } from "../../data/postgres";
import { EntidadUsuario, EntidadReceta, ErrorCustomizado, IngredientesRecetasDto, RecetaDto, RecetaIngredientesDto } from "../../domain";

export class RecetaService {

    constructor(){};

    async generarRecetas(ingredientesRecetaDto: IngredientesRecetasDto) {

        const correoExiste = await prisma.usuario.findFirst({
            where: { correo: ingredientesRecetaDto.correo }
        });
        if ( !correoExiste ) throw ErrorCustomizado.badRequest( 'El correo no existe' )

        try {
            const ingredientes = await prisma.teneringrediente.findMany({
                where: { correo: ingredientesRecetaDto.correo },
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

    async datosReceta(datosReceta: RecetaDto){
        const recetaExiste = await prisma.receta.findFirst({
            where : {idreceta : datosReceta.idReceta}
        });
        if ( !recetaExiste ) throw ErrorCustomizado.badRequest( 'No existe la receta' )
        
        try {
            const receta = await prisma.receta.findUnique({
                where: {idreceta : datosReceta.idReceta}
            });

            const ingredientes = await prisma.haberingrediente.findMany({
                where : {idreceta : datosReceta.idReceta},
                select : {
                    idingrediente : true,
                    cantidad : true
                }
            });
            return {
                nombre: receta?.nombre,
                tiempo: receta?.tiempo,
                proceso: receta?.proceso,
                ingredientes : ingredientes
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async crearReceta ( datosReceta: RecetaDto, usuario: EntidadUsuario, recetaIngredientesDto: RecetaIngredientesDto ) {
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

            recetaIngredientesDto.ingredientes.forEach(async ingrediente => {                
                const ingredientesReceta = await prisma.haberingrediente.createMany({
                    data: {
                        idreceta: recetaNueva.idreceta,
                        idingrediente: ingrediente.idIngrediente,
                        cantidad: ingrediente.cantidad
                    }
                });
            });

            return {
                recta:{
                    nombre: recetaNueva?.nombre,
                    tiempo: recetaNueva?.tiempo,
                    proceso: recetaNueva?.proceso,
                },
                correo: usuario.correo
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async editarReceta ( datosReceta: RecetaDto, usuario: EntidadUsuario ) {
        const usuarioExiste = await prisma.usuario.findUnique( {
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        const recetaExiste = await prisma.receta.findUnique( {
            where: { idreceta: datosReceta.idReceta }
        });
        if ( !recetaExiste ) throw ErrorCustomizado.badRequest( 'La receta no existe' );

        try {
            const recetaNueva = await prisma.receta.update({
                where:{
                    idreceta: datosReceta.idReceta
                },
                data: {
                    nombre: datosReceta.nombre,
                    tiempo: datosReceta.tiempo,
                    proceso: datosReceta.proceso,
                    correo: usuario.correo
                }    
            });

            return {
                recta:{
                    nombre: recetaNueva?.nombre,
                    tiempo: recetaNueva?.tiempo,
                    proceso: recetaNueva?.proceso,
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
}