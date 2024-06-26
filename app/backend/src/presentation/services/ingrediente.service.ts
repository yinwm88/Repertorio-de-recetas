import { prisma } from "../../data/postgres";
import { CrearIngredienteDto, EntidadUsuario, ErrorCustomizado, IngredienteUsuario, IngredientesRecetasDto, ManipularIngredienteDto } from "../../domain";


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
        
        const ingredienteAgregado = await prisma.teneringrediente.findFirst({
            where: {    
                correo: usuario.correo,
                idingrediente: idIngrediente
            }
        });
        if ( !ingredienteAgregado ) throw ErrorCustomizado.badRequest( 'El ingrediente no esta agregado' );

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

    async crearIngrediente( informacionIngrediente:CrearIngredienteDto ) {
        try {
            const ingredienteCreado = await prisma.ingrediente.create({
                data:{
                    nombre: informacionIngrediente.nombre,
                    calorias: informacionIngrediente.calorias,
                    unidad: informacionIngrediente.unidad,
                    caduca: informacionIngrediente.caduca
                }
            })

            return {
                ingrediente: true
            }
            
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async listaDeCompras(correo : string){

        const usuarioExiste = await prisma.usuario.findFirst({
            where : {
                correo : correo
            }
        });
        if (!usuarioExiste) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        
        try {
            const lista = await prisma.compraringrediente.findMany({
                where : {
                    correo : correo
                },
                select : {
                    idingrediente : true,
                    cantidad : true
                }
            });
            return lista;
            
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }  
    }

    async comprarIngredienteFaltante(correo : string, idingrediente : number){
        const usuarioExiste = await prisma.usuario.findFirst({
            where : {
                correo : correo
            }
        });
        if (!usuarioExiste) throw ErrorCustomizado.badRequest( 'El usuario no existe' );
        
        const ingredienteExiste = await prisma.ingrediente.findFirst({
            where : {
                idingrediente : idingrediente
            }
        });
        if (!ingredienteExiste) throw ErrorCustomizado.badRequest( 'El ingrediente no existe' );

        const noTieneIngrediente = await prisma.compraringrediente.findFirst({
            where : {
                correo : correo,
                idingrediente : idingrediente
            }
        });
        if(!noTieneIngrediente) throw ErrorCustomizado.badRequest( 'El ingrediente no está en la lista de compras' );

        try {
            const ingredienteComprado = await prisma.compraringrediente.delete({
                where : {
                    comprarIngrediente: {
                        correo : correo,
                        idingrediente : idingrediente
                    }
                }
            });
            return { 
                ingrediente: "Ingrediente eliminado"
            }
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }
}