import { Router } from "express";
import { RutasInicio, RutasJoin, RutasIngrediente, RutasUsuario } from "./index";

export class Routes {

    public static get rutas(): Router {

        const router = Router();

        router.use('/', RutasInicio.rutas );
        router.use('/join', RutasJoin.rutas );
        router.use('/ingrediente', RutasIngrediente.rutas );
        router.use('/usuario', RutasUsuario.rutas );

        return router;
    }
}