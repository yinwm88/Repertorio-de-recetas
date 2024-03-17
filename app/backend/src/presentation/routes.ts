import { Router } from "express";
import { RutasInicio } from "./inicio/RutasInicio";
import { RutasJoin } from "./join/RutasJoin";

export class Routes {

    public static get rutas(): Router {

        const router = Router();

        router.use('/', RutasInicio.rutas );
        router.use('/join', RutasJoin.rutas );

        return router;
    }
}