import { Router } from "express";
import { ControladorJoin } from "./ControladorJoin";
import { CorreoService, UsuarioService } from "../services";
import { envs } from "../../config";


export class RutasJoin {

    static get rutas(): Router {        
        
        const router = Router();
        
        const correoService: CorreoService = new CorreoService(
            envs.MAILER_SERVICE, 
            envs.MAILER_EMAIL, 
            envs.MAILER_SECRET_KEY
        );
        
        const usuarioService: UsuarioService = new UsuarioService( correoService );
        const controlador = new ControladorJoin(usuarioService);

        router.post('/ingresar', controlador.ingresarUsuario ); 
        router.post('/registrarse', controlador.registrarUsuario ); 
        
        router.get('/validarCorreo/:token', controlador.validarCorreo );


        return router;
    }
}