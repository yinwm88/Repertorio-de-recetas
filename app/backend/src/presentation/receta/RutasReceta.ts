import { Router } from 'express';
import { RecetaService } from '../services/receta.service';
import { ControladorRecetas } from './ControladorReceta';
import { JoinMiddleware } from '../middlewares/join.middleware';
import { Multer } from 'multer';
const multer = require('multer');

export class RutasReceta{

    static get rutas(): Router{

        const upload  =  multer();
        const router = Router();
        const recetaService = new RecetaService();
        const controlador = new ControladorRecetas(recetaService);

        router.get('/datosReceta/:idReceta', controlador.datosReceta );
        router.post('/marcarFavorita', controlador.marcarFavorita );
        router.post('/recetasFavoritas', controlador.recetasFavoritas );
        
        router.post('/recetasUsuario', [ JoinMiddleware.validarJwt ], controlador.obtenerRecetasUsuario );
        router.delete('/eliminarReceta', [ JoinMiddleware.validarJwt ], controlador.eliminarReceta );
        router.post('/crearReceta', [ JoinMiddleware.validarJwt ], controlador.crearReceta );
        router.post('/nuevaVariacion', [ JoinMiddleware.validarJwt ], controlador.crearVariacion );
        router.put('/editarReceta', [ JoinMiddleware.validarJwt ], controlador.editarReceta );
        router.post('/imagen/:id', upload.single('imagen'), controlador.subirImagenReceta );
        router.delete('/borrarReceta', [JoinMiddleware.validarJwt ], controlador.borrarRecetaUsuario );
        router.post('/crearLista',controlador.crearListaCompras );
        router.post('/cocinar', controlador.cocinar );
        router.post('/cocinadas', controlador.obtenerRecetasCocinadas)
        return router;
    }
}