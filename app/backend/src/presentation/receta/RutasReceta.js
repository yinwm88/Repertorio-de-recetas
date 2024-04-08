"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutasReceta = void 0;
const express_1 = require("express");
const receta_service_1 = require("../services/receta.service");
const ControladorReceta_1 = require("./ControladorReceta");
class RutasReceta {
    static get rutas() {
        const router = (0, express_1.Router)();
        const recetaService = new receta_service_1.RecetaService();
        const controlador = new ControladorReceta_1.ControladorRecetas(recetaService);
        router.get('/datosReceta/:id', controlador.datosReceta);
        router.post('/marcarFavorita', controlador.marcarFavorita);
        return router;
    }
}
exports.RutasReceta = RutasReceta;
