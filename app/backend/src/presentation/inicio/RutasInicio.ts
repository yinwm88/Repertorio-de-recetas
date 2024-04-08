import { Router } from "express";
import { IngredienteService } from "../services/ingrediente.service";
import { RecetaService } from "../services/receta.service";
import { ControladorInicio } from "./ControladorInicio";

export class RutasInicio {

    static get rutas(): Router {        
        
        const router = Router();
        const ingredienteService = new IngredienteService();
        const recetaService = new RecetaService();
        const controlador = new ControladorInicio(ingredienteService, recetaService);

        router.post('/ingredientesUsuario', controlador.obtenerIngredientesUsuario);
        router.post('/generarRecetas', controlador.generarRecetas);
        
        
        return router;
    }
}