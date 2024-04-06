import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado, IngredienteUsuario, IngredientesRecetasDto, ManipularIngredienteDto } from "../../domain";


export class IngredienteService {

    constructor() {}

    async agregarIngrediente(manipularIngredienteDto: ManipularIngredienteDto, user: EntidadUsuario) {
        
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

    async obtenerIngredientesUsuario(ingredientesRecetaDto: IngredientesRecetasDto) {
        const usuarioExiste = await prisma.usuario.findFirst({
            where: { correo: ingredientesRecetaDto.correo }
        });       
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );       
        try {
            const ingredientesUsuario = await prisma.teneringrediente.findMany({
                include:{
                    ingrediente: true
                },
                where: { correo: ingredientesRecetaDto.correo }
            })

            let ingredientes: IngredienteUsuario[] = [];
            ingredientesUsuario.map((ingrediente: any) => 
                ingredientes.push(IngredienteUsuario.crearInstancia(ingrediente))
            );                
            return {
                ingredientes: ingredientes
            } 
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }
    
    async buscarIngrediente(ingrediente: string) {
        try {
            const ingredientes = await prisma.ingrediente.findMany({
                take:10,
                where:{ 
                    nombre: {
                        startsWith: `${ingrediente}_`,
                        mode: 'insensitive'
                    }
                }
            });
            if (ingredientes.length === 0 ) {
                return {ingredientes: 'No hay ingredientes'};
            }
            return {ingredientes: ingredientes};
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }

    }
                
    async eliminarIngrediente(manipularIngredienteDto: ManipularIngredienteDto, user: EntidadUsuario) {
        
        const ingredienteExiste = await prisma.ingrediente.findFirst({
            where: { idingrediente: manipularIngredienteDto.idIngrediente }
        });
        if ( !ingredienteExiste ) throw ErrorCustomizado.badRequest( 'Ingrediente no existe' );
        
        const usuarioExiste = await prisma.usuario.findFirst({
            where: { correo: user.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        
        try {
            const ingrediente = await prisma.teneringrediente.delete({
                where: {    
                    tenerId:{
                        correo: user.correo,
                        idingrediente: manipularIngredienteDto.idIngrediente
                    }
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

    async editarIngrediente(manipularIngredienteDto: ManipularIngredienteDto, user: EntidadUsuario) {
        
        const ingredienteExiste = await prisma.ingrediente.findFirst({
            where: { idingrediente: manipularIngredienteDto.idIngrediente }
        });
        if ( !ingredienteExiste ) throw ErrorCustomizado.badRequest( 'Ingrediente no existe' );
        
        const usuarioExiste = await prisma.usuario.findFirst({
            where: { correo: user.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        
        try {
            const ingrediente = await prisma.teneringrediente.update({
                where: {    
                    tenerId:{
                        correo: user.correo,
                        idingrediente: manipularIngredienteDto.idIngrediente
                    }
                },
                data: {
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
}