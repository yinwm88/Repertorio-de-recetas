import { prisma } from "../../data/postgres";
import { ErrorCustomizado } from "../../domain";

export class UtensilioService {

    constructor() {}

    async activarUtensilio( idUtensilio: number ) {}

    async desactivarUtensilio( idUtensilio: number ) {}
    
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
                    icono: true
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