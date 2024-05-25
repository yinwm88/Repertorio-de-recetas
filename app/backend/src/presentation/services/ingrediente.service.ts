import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado, IngredienteUsuario, IngredientesRecetasDto, ManipularIngredienteDto } from "../../domain";


export class IngredienteService {

    constructor() {}

    async agregarIngrediente(manipularIngredienteDto: ManipularIngredienteDto, usuario: EntidadUsuario) {
        
        const ingredienteExiste = await prisma.ingrediente.findUnique({
            where: { idingrediente: manipularIngredienteDto.idIngrediente }
        });
        if ( !ingredienteExiste ) throw ErrorCustomizado.badRequest( 'Ingrediente no existe' );
        
        const usuarioExiste = await prisma.usuario.findUnique( {
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        
        try {
            const fechaActual = new Date();
            const ingrediente = await prisma.teneringrediente.upsert({
                where:{
                    tenerId:{
                        idingrediente:+manipularIngredienteDto.idIngrediente,
                        correo:usuario.correo
                    }
                },
                update:{
                    fecha: fechaActual,
                    cantidad: {
                        increment: manipularIngredienteDto.cantidad
                    }
                },
                create:{
                    idingrediente:+manipularIngredienteDto.idIngrediente,
                    correo:usuario.correo,
                    cantidad: manipularIngredienteDto.cantidad,
                    fecha: fechaActual                    
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
                        startsWith: `${ingrediente}`,
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
                
    async eliminarIngrediente( idIngrediente: number, usuario: EntidadUsuario ) {
        
        const ingredienteExiste = await prisma.ingrediente.findFirst({
            where: { idingrediente: idIngrediente }
        });
        if ( !ingredienteExiste ) throw ErrorCustomizado.badRequest( 'Ingrediente no existe' );
        
        const usuarioExiste = await prisma.usuario.findFirst({
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        
        try {
            const ingrediente = await prisma.teneringrediente.delete({
                where: {    
                    tenerId:{
                        correo: usuario.correo,
                        idingrediente: idIngrediente
                    }
                }
            });
            return {
                idingrediente: ingrediente.idingrediente,
                correo:ingrediente.correo,
                cantidad: ingrediente.cantidad,
                fechaAgrego: ingrediente.fecha,
                fechacaducidad: ingrediente.fechacaducidad
            } 
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async editarIngrediente(manipularIngredienteDto: ManipularIngredienteDto, usuario: EntidadUsuario) {
        
        const ingredienteExiste = await prisma.ingrediente.findFirst({
            where: { idingrediente: manipularIngredienteDto.idIngrediente }
        });
        if ( !ingredienteExiste ) throw ErrorCustomizado.badRequest( 'Ingrediente no existe' );
        
        const usuarioExiste = await prisma.usuario.findFirst({
            where: { correo: usuario.correo }
        });
        if ( !usuarioExiste ) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        
        try {
            const ingrediente = await prisma.teneringrediente.update({
                where: {    
                    tenerId:{
                        correo: usuario.correo,
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

    async getDatosIngrediente(id : number){
        const ingredienteExiste = await prisma.ingrediente.findFirst({
            where : { idingrediente : id}
        });
        if (!ingredienteExiste) throw ErrorCustomizado.badRequest( 'El ingrediente no existe' );
        try {
            const ingrediente = await prisma.ingrediente.findFirst({
                where : { idingrediente : id},
                select : { 
                    nombre : true,
                    unidad : true,
                    calorias : true
                 }
            });
            return ingrediente;
        } catch(error){
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }
}