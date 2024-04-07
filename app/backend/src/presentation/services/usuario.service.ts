import { Crypto } from "../../config";
import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado, IngresarUsuarioDto, RegistrarUsuarioDto } from "../../domain";

export class UsuarioService {

    constructor() {}

    async ingresarUsuario( ingresarUsuarioDto: IngresarUsuarioDto ) {
        
        const usuario = await prisma.usuario.findUnique({
            where: { correo: ingresarUsuarioDto.correo }
        })
        if (!usuario) throw ErrorCustomizado.badRequest('El correo no existe');
        
        const hash: string = usuario.contrasena;
        const salt: string = usuario.salt!;
        if ( !Crypto.compararContrasena(ingresarUsuarioDto.contrasena, hash, salt) ) {
            throw ErrorCustomizado.badRequest( 'Contraseña incorrecta' );
        }

        const {contrasena, ...user} = EntidadUsuario.crearInstancia( usuario )
        return { 
            usuario: user,
            token:'Token'
        }
    }
    
    async registrarUsuario( registrarUsuarioDto: RegistrarUsuarioDto ) {

        const usuario = await prisma.usuario.findUnique({
            where: { correo: registrarUsuarioDto.correo }
        })
        if ( usuario ) throw ErrorCustomizado.badRequest('El correo ya existe');
        try {
            
            const [hash, salt] = Crypto.crearHash(registrarUsuarioDto.contrasena);

            // const  hash  = 'hola';
            const usuarioNuevo = await prisma.usuario.create({
                data:{
                    correo:registrarUsuarioDto.correo,
                    nombre:registrarUsuarioDto.nombre,
                    apellido:registrarUsuarioDto.apellido,
                    contrasena: hash,
                    salt: salt
                }
            });
            const {contrasena, ...usuario} = EntidadUsuario.crearInstancia( usuarioNuevo )
            return { 
                usuario: usuario,
                token:'Token'
            }
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }

    }

    
}