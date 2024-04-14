import { Encriptador, GestorJwt, envs } from "../../config";
import { prisma } from "../../data/postgres";
import { EntidadUsuario, ErrorCustomizado, IngresarUsuarioDto, RegistrarUsuarioDto } from "../../domain";
import { CorreoService } from "./correo.service";

export class UsuarioService {

    constructor(
        private readonly correoService:CorreoService
    ) {}

    async ingresarUsuario( ingresarUsuarioDto: IngresarUsuarioDto ) {
        
        const usuario = await prisma.usuario.findUnique({
            where: { correo: ingresarUsuarioDto.correo }
        })
        if (!usuario) throw ErrorCustomizado.badRequest('El correo no existe');
        
        const hash: string = usuario.contrasena;
        const salt: string = usuario.salt!;
        if ( !Encriptador.compararContrasena(ingresarUsuarioDto.contrasena, hash, salt) ) {
            throw ErrorCustomizado.badRequest( 'Contraseña incorrecta' );
        }

        const {contrasena, ...user} = EntidadUsuario.crearInstancia( usuario )

        const token = await GestorJwt.generarToken({ correo: usuario.correo });
        if ( !token ) throw ErrorCustomizado.internalServer('Error al crear el Jwt');

        return { 
            usuario: user,
            token: token
        }
    }
    
    async registrarUsuario( registrarUsuarioDto: RegistrarUsuarioDto ) {

        const usuario = await prisma.usuario.findUnique({
            where: { correo: registrarUsuarioDto.correo }
        })
        if ( usuario ) throw ErrorCustomizado.badRequest('El correo ya existe');
        try {
            
            const [hash, salt] = Encriptador.crearHash(registrarUsuarioDto.contrasena);

            const usuarioNuevo = await prisma.usuario.create({
                data:{
                    correo:registrarUsuarioDto.correo,
                    nombre:registrarUsuarioDto.nombre,
                    apellido:registrarUsuarioDto.apellido,
                    contrasena: hash,
                    salt: salt
                }
            });
            await this.enviarLinkCorreo( usuarioNuevo.correo );

            const token = await GestorJwt.generarToken({ correo: usuarioNuevo.correo });
            if ( !token ) throw ErrorCustomizado.internalServer('Error al crear el Jwt');


            const {contrasena, ...usuario} = EntidadUsuario.crearInstancia( usuarioNuevo )
            return { 
                usuario: usuario,
                token:token
            }
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }

    }

    private async enviarLinkCorreo( correo: string ) {
        const token = await GestorJwt.generarToken({ correo });
        if ( !token ) throw ErrorCustomizado.internalServer('Error al crear el Jwt');

        const link = `${ envs.WEBSERVICE_URL }/join/validarCorreo/${ token }`;
        
        const html = `
        <h1>Validar el Correo</h1>
        <p>Entra en el siguiente link, para validar el correo: ${ correo }</p>
        <a href="${ link }">click</a>
        `;
        const opciones = {
            to: correo,
            subject: 'Validar correo',
            htmlBody: html,
        }

        const isSent = await this.correoService.enviarCorreo( opciones );
        if ( !isSent ) throw ErrorCustomizado.internalServer('Error enviando el correo');

        return true;
    }

    public validarCorreo = async(token:string) => {

        const payload = await GestorJwt.validarToken(token);
        if ( !payload ) throw ErrorCustomizado.noAutorizado('Token Invalido');
    
        const { correo } = payload as { correo: string };
        if ( !correo ) throw ErrorCustomizado.internalServer('El correo no esta en el token');
    
        const usuario = await prisma.usuario.findUnique({
            where: { correo: correo }
        })
        if (!usuario) throw ErrorCustomizado.internalServer('El correo no existe');

        try {
            await prisma.usuario.update({
                where: { correo: usuario.correo },
                data: {
                    verificado: true
                }
            });

            return true;
        } catch (error) {
            throw ErrorCustomizado.internalServer( `${ error }` );
        }
      }
}