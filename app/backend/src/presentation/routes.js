"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const index_1 = require("./index");
class Routes {
    static get rutas() {
        const router = (0, express_1.Router)();
        router.use('/', index_1.RutasInicio.rutas);
        router.use('/join', index_1.RutasJoin.rutas);
        router.use('/ingrediente', index_1.RutasIngrediente.rutas);
        router.use('/usuario', index_1.RutasUsuario.rutas);
        router.use('/receta', index_1.RutasReceta.rutas);
        return router;
    }
}
exports.Routes = Routes;
