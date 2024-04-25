import { Router } from 'express';
import { RecetaService } from '../services/receta.service';
import { ControladorRecetas } from './ControladorReceta';

export class RutasReceta{

    static get rutas(): Router{

        const router = Router();
        const recetaService = new RecetaService();
        const controlador = new ControladorRecetas(recetaService);

        router.get('/datosReceta/:idReceta', controlador.datosReceta );
        router.get('/crearCopia/:idReceta', controlador.datosReceta );
        router.post('/marcarFavorita', controlador.marcarFavorita );
        router.post('/recetasFavoritas', controlador.recetasFavoritas );
        router.post('/crearReceta', controlador.crearReceta );
        router.post('/recetasIncompletas', controlador.recetasIncompletas );

        router.patch('/editarReceta', controlador.editarReceta );
        router.delete('/eliminarReceta', controlador.eliminarReceta );

        return router;
    }
}