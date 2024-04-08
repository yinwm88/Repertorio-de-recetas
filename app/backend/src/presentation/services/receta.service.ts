import { prisma } from "../../data/postgres";
import { EntidadUsuario, EntidadReceta, ErrorCustomizado, IngredientesRecetasDto, RecetaDto } from "../../domain";

export class RecetaService {

    constructor(){};

    async generarRecetas(ingredientesRecetaDto: IngredientesRecetasDto) {

        const correoExiste = await prisma.usuario.findFirst({
            where: { correo: ingredientesRecetaDto.correo }
        });
        if ( !correoExiste ) throw ErrorCustomizado.badRequest( 'El correo no existe' )

        try {
            const recetas =  await prisma.$queryRaw
                            `select idReceta
                            from Receta 
                            where not exists (
                                select idIngrediente 
                                from haberIngrediente 
                                where haberIngrediente.idReceta = Receta.idReceta 
                                and idIngrediente not in (
                                    select Ingrediente.idIngrediente 
                                    from Ingrediente 
                                    inner join tenerIngrediente on Ingrediente.idIngrediente = tenerIngrediente.idIngrediente 
                                    where correo = ${ingredientesRecetaDto.correo}
                                )
                            )`;
            return {recetas: recetas};
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