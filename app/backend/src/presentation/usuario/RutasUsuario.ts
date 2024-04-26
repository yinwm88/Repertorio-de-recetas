import { Router } from "express";
import { RutasUtensilio } from "./utensilio/RutasUtensilio";
import { ControladorUsuario } from "./ControladorUsuario";
import { CorreoService, UsuarioService } from "../services";
import { envs } from "../../config";

export class RutasUsuario {

    static get rutas(): Router {        
        
        const router = Router();
        const correoService:CorreoService = new CorreoService(
            envs.MAILER_SERVICE, 
            envs.MAILER_EMAIL, 
            envs.MAILER_SECRET_KEY
        );
        const usuarioService: UsuarioService = new UsuarioService( correoService );
        const controlador: ControladorUsuario = new ControladorUsuario( usuarioService );

        router.use('/utensilio', RutasUtensilio.rutas );

        router.put('/contrasena', controlador.cambiarContrasena );
        router.put('/correo', controlador.cambiarCorreo );
        router.put('/peso', controlador.cambiarPeso );
        router.put('/altura', controlador.cambiarAltura );
        // TODO: Agregar utensilio al usuario
        router.put('utensilio/:id/active', );
        // TODO: Quitar utensilio al usuario
        router.delete('utensilio/:id', );
        // TODO: Rutas para las funciones del usuario: cambiar contraseña, peso, talla, etc.
        router.patch('/formOpcional', controlador.formOpcional);

        return router;
    }
}