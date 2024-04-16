import { prisma } from "../../data/postgres";
import { ErrorCustomizado, IngredientesRecetasDto, RecetaDto } from "../../domain";

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
            const ingredientesReceta = [];
            const recetasListas = [];

            for (let index = 1; index <= cantidadRecetas; index++) {
                const ingredientesRecetas = await prisma.haberingrediente.findMany({
                    where: { idreceta: index },
                    select: {idingrediente : true}
                });
                ingredientesReceta.push(ingredientesRecetas.map(ingrediente => ingrediente.idingrediente));
            }

            for (let index = 0; index < ingredientesReceta.length; index++) {
                if(ingredientesReceta[index].every(ingrediente => ingredientes.some(ing => ing.idingrediente === ingrediente))) {
                    recetasListas.push({ idreceta:index + 1 });
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
            return {
                nombre: receta?.nombre,
                tiempo: receta?.tiempo,
                proceso: receta?.proceso
            }
        }catch (error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }
}