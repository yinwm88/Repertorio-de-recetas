import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado, IngresarUsuarioDto } from "../../domain";

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

    
}