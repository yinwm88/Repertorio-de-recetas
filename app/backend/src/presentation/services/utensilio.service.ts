import { error } from "console";
import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado } from "../../domain";

export class UtensilioService {

    constructor() {}

    //TODO: Corregir error en la respuesta
    async activarUtensilio( idUtensilio: number, usuario: EntidadUsuario ) {
        const utensilioExiste = await prisma.electrodomestico.findUnique({
            where: { idelectro: idUtensilio }
        });
        if ( !utensilioExiste ) throw ErrorCustomizado.badRequest( 'Utensilio no existe' );
        const utensilioAgregado = await prisma.poseer.findUnique({
            where: {
                poseerID:{
                    correo: usuario.correo,
                    idelectro: idUtensilio
                }
            }
        })
        if ( utensilioAgregado ) throw ErrorCustomizado.badRequest( 'El utensilio ya esta agregado' );

        try {            
            const utensilio = await prisma.poseer.create({
                data: {
                    idelectro: idUtensilio,
                    correo: usuario.correo
                }
            });
            return {
                idUtensilio:utensilio.idelectro,
                correo:utensilio.correo
            } 
        } catch (error) {
            console.log(error)
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async desactivarUtensilio( idUtensilio: number, usuario: EntidadUsuario ) {
        const utensilioExiste = await prisma.electrodomestico.findUnique({
            where: { idelectro: idUtensilio }
        });
        if ( !utensilioExiste ) throw ErrorCustomizado.badRequest( 'Utensilio no existe' );
        const utensilioNoAgregado = await prisma.poseer.findUnique({
            where: {
                poseerID:{
                    correo: usuario.correo,
                    idelectro: idUtensilio
                }
            }
        })
        if ( !utensilioNoAgregado ) throw ErrorCustomizado.badRequest( 'El utensilio no ha sido agregado' );

        try {            
            const utensilio = await prisma.poseer.delete({
                where:{
                    poseerID:{
                        correo: usuario.correo,
                        idelectro: idUtensilio
                    }
                }
            });
            return {
                idUtensilio:utensilio.idelectro,
                correo:utensilio.correo
            } 
        } catch (error) {
            console.log(error)

            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }
    
    async buscarUtensilio( cadenaUtensilio: string ) {
        try {
            const utensilio = await prisma.electrodomestico.findMany({
                take:10,
                where:{ 
                    nombre: {
                        startsWith: `${cadenaUtensilio}`,
                        mode: 'insensitive'
                    }
                },
                select:{
                    nombre: true,
                    idelectro: true, 
                    //icono: true
                }
            });
            if (utensilio.length === 0 ) {
                return {utensilio: 'No hay ingredientes'};
            }
            return {utensilio: utensilio};
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }
    
    async obtenerUtensilios() {
        try {
            const utensilios = await prisma.electrodomestico.findMany();
            
            return {
                utensilios: utensilios
            }
        } catch (error) {
            
        }
    }
}