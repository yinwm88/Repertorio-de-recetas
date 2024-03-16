import { Router } from "express";
import { RutasInicio } from "./inicio/RutasInicio";

export class Routes {

    public static get rutas(): Router {

        const router = Router();

        router.use('/', RutasInicio.rutas );

        return router;
    }
}