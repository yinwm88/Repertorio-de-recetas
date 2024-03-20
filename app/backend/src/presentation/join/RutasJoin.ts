import { Router } from "express";
import { UsuarioService } from "../services/usuario.service";
import { ControladorJoin } from "./ControladorJoin";

export class RutasJoin {

    static get rutas(): Router {        
        
        const router = Router();
        const usuarioService = new UsuarioService();
        const controlador = new ControladorJoin(usuarioService);

        //TODO: Iniciar sesion
        router.post('/ingresar', controlador.ingresarUsuario ); 
        //TODO: Registrar un nuevo usuario
        router.post('/registrarse', controlador.registrarUsuario ); 
        
        return router;
    }
}