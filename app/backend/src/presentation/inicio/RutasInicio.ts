import { Router } from "express";
import { IngredienteService } from "../services/ingrediente.service";
import { ControladorInicio } from "./ControladorInicio";

export class RutasInicio {

    static get rutas(): Router {        
        
        const router = Router();
        const ingredienteService = new IngredienteService();
        const controlador = new ControladorInicio(ingredienteService);

        router.get('/ingredientesUsuario', controlador.obtenerIngredientesUsuario );
        //TODO: Generar recetas del usuario
        router.get('/generarRecetas', );
        
        return router;
    }
}