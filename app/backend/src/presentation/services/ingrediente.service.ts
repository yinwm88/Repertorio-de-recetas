import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado, ManipularIngrediente } from "../../domain";


export class IngredienteService {

    constructor() {}

    async agregarIngrediente(manipularIngredienteDto: ManipularIngrediente, user: EntidadUsuario) {
        
        const ingredienteExiste = await prisma.ingrediente.findFirst({
            where: { idingrediente: manipularIngredienteDto.idIngrediente }
        });
        if ( !ingredienteExiste ) throw ErrorCustomizado.badRequest( 'Ingrediente no existe' );
        
        const usuarioExiste = await prisma.usuario.findFirst({
            where: { correo: user.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        
        try {
            const ingrediente = await prisma.teneringrediente.create({
                data:{
                    idingrediente:+manipularIngredienteDto.idIngrediente,
                    correo:user.correo,
                    cantidad: manipularIngredienteDto.cantidad                    
                }
            });
            return {
                idingrediente:ingrediente.idingrediente,
                correo:ingrediente.correo,
                cantidad: ingrediente.cantidad,
                fechaAgrego: ingrediente.fecha,
                fechacaducidad: ingrediente.fechacaducidad
            } 
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

}