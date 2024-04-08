"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutasJoin = void 0;
const express_1 = require("express");
const usuario_service_1 = require("../services/usuario.service");
const ControladorJoin_1 = require("./ControladorJoin");
class RutasJoin {
    static get rutas() {
        const router = (0, express_1.Router)();
        const usuarioService = new usuario_service_1.UsuarioService();
        const controlador = new ControladorJoin_1.ControladorJoin(usuarioService);
        router.post('/ingresar', controlador.ingresarUsuario);
        router.post('/registrarse', controlador.registrarUsuario);
        return router;
    }
}
exports.RutasJoin = RutasJoin;
