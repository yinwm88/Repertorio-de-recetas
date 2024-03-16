import { Router } from "express";
import { IngredienteService } from "../services/ingrediente.service";
import { ControladorInicio } from "./ControladorInicio";

export class RutasInicio {

    static get rutas(): Router {        
        
        const router = Router();
        const ingredienteService = new IngredienteService();
        const controlador = new ControladorInicio(ingredienteService);

        //TODO: Agregar ingrediente
        router.post('/', controlador.agregarIngrediente ); 
        //TODO: Eliminar ingrediente
        // router.delete('/', );
        //TODO: Obtener ingrediente de la BD
        // router.get('/', );
        //TODO: Obtener ingrediente del usuario
        // router.get('/:id', );
        
        return router;
    }
}