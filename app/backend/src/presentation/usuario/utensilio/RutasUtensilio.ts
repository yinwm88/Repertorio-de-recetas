import { Router } from "express";
import { controladorUtensilio } from "./ControladorUtensilio";
import { UtensilioService } from "../../services";

export class RutasUtensilio {

    static get rutas(): Router {        
        const router = Router();
        const utensilioService: UtensilioService = new UtensilioService();
        const controlador:controladorUtensilio = new controladorUtensilio( utensilioService );

        router.put('/:idUtensilio/active', controlador.activarUtensilio );
        router.delete('/:idUtensilio', controlador.desactivarUtensilio );
        router.post('/buscar', controlador.buscarUtensilio );
        router.get('/', controlador.obtenerUtensilios );

        return router;
    }
}