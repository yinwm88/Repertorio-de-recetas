import { Router } from "express";
import { controladorUtensilio } from "./ControladorUtensilio";
import { UtensilioService } from "../../services";
import { JoinMiddleware } from "../../middlewares/join.middleware";

export class RutasUtensilio {

    static get rutas(): Router {        
        const router = Router();
        const utensilioService: UtensilioService = new UtensilioService();
        const controlador:controladorUtensilio = new controladorUtensilio( utensilioService );

        router.get('/', controlador.obtenerUtensilios );
        router.post('/:idUtensilio/activar', [ JoinMiddleware.validarJwt ], controlador.activarUtensilio );
        router.delete('/:idUtensilio', [ JoinMiddleware.validarJwt ], controlador.desactivarUtensilio );
        router.post('/buscar', controlador.buscarUtensilio );

        return router;
    }
}