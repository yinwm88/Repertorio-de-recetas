"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutasIngrediente = void 0;
const express_1 = require("express");
const ingrediente_service_1 = require("../services/ingrediente.service");
const ControladorIngrediente_1 = require("./ControladorIngrediente");
class RutasIngrediente {
    static get rutas() {
        const router = (0, express_1.Router)();
        const ingredienteService = new ingrediente_service_1.IngredienteService();
        const controlador = new ControladorIngrediente_1.ControladorIngrediente(ingredienteService);
        router.post('/agregar', controlador.agregarIngrediente);
        router.post('/buscar', controlador.buscarIngrediente);
        router.post('/eliminar/:id', controlador.eliminarIngrediente);
        router.patch('/:id', controlador.editarIngrediente);
        return router;
    }
}
exports.RutasIngrediente = RutasIngrediente;
