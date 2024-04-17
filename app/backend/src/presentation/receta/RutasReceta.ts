import { Router } from "express";
import { RecetaService } from "../services/receta.service";
import { ControladorRecetas } from "./ControladorReceta";

export class RutasReceta{

    static get rutas(): Router{

        const router = Router();
        const recetaService = new RecetaService();
        const controlador = new ControladorRecetas(recetaService);

        router.post('/datosReceta/:id', controlador.datosReceta);
        router.post('/marcarFavorita', controlador.marcarFavorita);
        router.post('/recetasFavoritas', controlador.recetasFavoritas);
        router.post('/recetasIncompletas', controlador.recetasIncompletas);
        return router;
    }



}