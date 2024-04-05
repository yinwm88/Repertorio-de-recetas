import { Router } from "express";
import { IngredienteService } from "../services/ingrediente.service";
import { ControladorIngrediente } from "./ControladorIngrediente";

export class RutasIngrediente {

    static get rutas(): Router {        
        
        const router = Router();
        const ingredienteService = new IngredienteService();
        const controlador = new ControladorIngrediente(ingredienteService);

        router.post('/agregar', controlador.agregarIngrediente ); 
        router.post('/buscar', controlador.buscarIngrediente );
        router.delete('/eliminar/:id', controlador.eliminarIngrediente );
        router.patch('/:id', controlador.editarIngrediente );
        
        return router;
    }
}