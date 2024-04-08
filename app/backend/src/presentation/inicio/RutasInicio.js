"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutasInicio = void 0;
const express_1 = require("express");
const ingrediente_service_1 = require("../services/ingrediente.service");
const receta_service_1 = require("../services/receta.service");
const ControladorInicio_1 = require("./ControladorInicio");
class RutasInicio {
    static get rutas() {
        const router = (0, express_1.Router)();
        const ingredienteService = new ingrediente_service_1.IngredienteService();
        const recetaService = new receta_service_1.RecetaService();
        const controlador = new ControladorInicio_1.ControladorInicio(ingredienteService, recetaService);
        router.post('/ingredientesUsuario', controlador.obtenerIngredientesUsuario);
        router.post('/generarRecetas', controlador.generarRecetas);
        return router;
    }
}
exports.RutasInicio = RutasInicio;
