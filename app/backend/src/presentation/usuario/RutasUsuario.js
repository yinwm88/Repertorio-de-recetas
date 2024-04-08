"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutasUsuario = void 0;
const express_1 = require("express");
class RutasUsuario {
    static get rutas() {
        const router = (0, express_1.Router)();
        // TODO: Agregar utensilio al usuario
        router.put('utensilio/:id/active');
        // TODO: Quitar utensilio al usuario
        router.delete('utensilio/:id');
        // TODO: Rutas para las funciones del usuario: cambiar contraseña, peso, talla, etc.
        return router;
    }
}
exports.RutasUsuario = RutasUsuario;
