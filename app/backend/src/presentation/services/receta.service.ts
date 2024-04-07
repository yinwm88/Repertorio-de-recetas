import { prisma } from "../../data/postgres";
import { ErrorCustomizado, IngredientesRecetasDto } from "../../domain";

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

    async marcarFavorita(){

    }
}