import { Router } from "express";

import { ControladorUsuario } from "./ControladorUsuario";
import { CorreoService, UsuarioService } from "../services";
import { envs } from "../../config";
import { JoinMiddleware } from "../middlewares/join.middleware";
import { RutasUtensilio } from "./utensilio/RutasUtensilio";

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
        router.put('/contrasena', [ JoinMiddleware.validarJwt ], controlador.cambiarContrasena );
        router.put('/peso', [ JoinMiddleware.validarJwt ], controlador.cambiarPeso );
        router.put('/altura', [ JoinMiddleware.validarJwt ], controlador.cambiarAltura );

        return router;
    }
}