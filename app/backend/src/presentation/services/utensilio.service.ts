import { prisma } from "../../data/postgres";
import { CrearUntensilioDto, EntidadUsuario, ErrorCustomizado } from "../../domain";

interface Utensilio {
    idelectro: number,
    nombre: string,
    icono: string | null,
    activo?: boolean
}

interface UtensilioActivo {
    electrodomestico: Utensilio
}

export class UtensilioService {

    constructor() {}

    private crearListaUtensilios( utensiliosUsuario: UtensilioActivo[], utensilios: Utensilio[] ): Utensilio[] {
        let listaUtensilios: Utensilio[] = [];
        let idUtensiliosActivos: number[] = [0]  
        if ( utensiliosUsuario.length > 0) {
            utensiliosUsuario.map( utensilios => {
                utensilios.electrodomestico.activo = true;
                listaUtensilios.push( utensilios.electrodomestico );
                idUtensiliosActivos.push( utensilios.electrodomestico.idelectro )
            });
        }
        utensilios.forEach( utensilio => {
            if ( !idUtensiliosActivos.includes(utensilio.idelectro) ) {
                utensilio.activo = false;
                listaUtensilios.push( utensilio );
            }
        });

        return listaUtensilios;
    }

    async datosUtensilio(idUtensilio : number){

        const utensilioExiste = await prisma.electrodomestico.findFirst({
            where : { idelectro : idUtensilio }            
        });
        if( !utensilioExiste ) throw ErrorCustomizado.badRequest( 'El tensilio no existe' );

        try {
            const utensilio = await prisma.electrodomestico.findFirst({
                where : {idelectro : idUtensilio}
            });
            return utensilio
        }catch(error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async activarUtensilio( idUtensilio: number, usuario: EntidadUsuario ) {
        const utensilioExiste = await prisma.electrodomestico.findUnique({
            where: { idelectro: idUtensilio }
        });
        if ( !utensilioExiste ) throw ErrorCustomizado.badRequest( 'Utensilio no existe' );
        const utensilioAgregado = await prisma.poseer.findUnique({
            where: {
                poseerID: {
                    correo: usuario.correo,
                    idelectro: idUtensilio
                }
            }
        });
        if ( !!utensilioAgregado ) throw ErrorCustomizado.badRequest( 'El utensilio ya esta agregado' );

        try {            
            await prisma.poseer.create({
                data: {
                    correo: usuario.correo,
                    idelectro: utensilioExiste.idelectro
                }
            });
            return {
                idUtensilio: idUtensilio,
                correo: usuario.correo
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
                    idelectro: utensilioExiste.idelectro
                }
            }
        })
        if ( !utensilioNoAgregado ) throw ErrorCustomizado.badRequest( 'El utensilio no ha sido agregado' );

        try {            
            const utensilio = await prisma.poseer.delete({
                where:{
                    poseerID:{
                        correo: usuario.correo,
                        idelectro: utensilioExiste.idelectro
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
            return { utensilios: utensilio };
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }
    
    async obtenerUtensilios( usuario: EntidadUsuario ) {
        try {
            const utensiliosUsuario = await prisma.poseer.findMany({
                select:{                    
                    electrodomestico: {
                        select: {
                            idelectro: true,
                            nombre: true,
                            icono: true
                        }
                    },
                },
                where: {
                    correo: usuario.correo
                }
            });
            
            const utensilios = await prisma.electrodomestico.findMany({
                select: {
                    idelectro: true,
                    nombre: true,
                    icono: true
                }
            });
            const listaUtensilios: Utensilio[] = this.crearListaUtensilios( utensiliosUsuario, utensilios );
            
            return {
                utensilios: listaUtensilios
            }
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async crearUtensilio( utensilio: CrearUntensilioDto ) {
        const utensilioExiste = await prisma.electrodomestico.findUnique({
            where: { nombre: utensilio.nombre }
        })
        if( !!utensilioExiste ) throw ErrorCustomizado.badRequest( 'Utensilio ya existe' );
        try {
            const nuevoUtensilio =  await prisma.electrodomestico.create({
                data: {
                    nombre: utensilio.nombre,
                    icono: utensilio.icono      
                }
            });
            return {
                utensilio: nuevoUtensilio
            }
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
    }

    async obtenerIconos( ) {
        const iconos = await prisma.electrodomestico.findMany({
            where: {},
            distinct: ['icono'],
            select:{
                icono: true
            }
        })

        return {
            iconos: iconos
        }
    }
}