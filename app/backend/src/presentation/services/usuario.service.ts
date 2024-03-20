import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado, IngresarUsuarioDto, RegistrarUsuarioDto } from "../../domain";

export class UsuarioService {

    constructor() {}

    async ingresarUsuario( ingresarUsuarioDto: IngresarUsuarioDto ) {
        
        const usuario = await prisma.usuario.findUnique({
            where: { correo: ingresarUsuarioDto.correo }
        })
        if (!usuario) throw ErrorCustomizado.badRequest('El correo no existe');
        if ( ingresarUsuarioDto.contrasena !== usuario.contrasena ) {
            throw ErrorCustomizado.badRequest( 'Contraseña incorrecta' );
        }

        return { usuario: EntidadUsuario.crearInstancia( usuario )}
    }
    
    async registrarUsuario( registrarUsuarioDto: RegistrarUsuarioDto ) {

        const usuario = await prisma.usuario.findUnique({
            where: { correo: registrarUsuarioDto.correo }
        })
        if ( usuario ) throw ErrorCustomizado.badRequest('El correo ya existe');
        try {
            
            const usuarioNuevo = await prisma.usuario.create({
                data:{
                    correo:registrarUsuarioDto.correo,
                    nombre:registrarUsuarioDto.nombre,
                    apellido:registrarUsuarioDto.apellido,
                    contrasena:registrarUsuarioDto.contrasena,
                }
            });
            return { usuario: EntidadUsuario.crearInstancia( usuarioNuevo )}
        } catch (error) {
            
        }

    }

    
}