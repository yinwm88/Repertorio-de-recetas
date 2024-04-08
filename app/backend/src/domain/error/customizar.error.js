"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCustomizado = void 0;
class ErrorCustomizado extends Error {
    constructor(codigoEstatus, mensaje) {
        super(mensaje);
        this.codigoEstatus = codigoEstatus;
        this.mensaje = mensaje;
    }
    static badRequest(mensaje) {
        return new ErrorCustomizado(400, mensaje);
    }
    static noAutorizado(mensaje) {
        return new ErrorCustomizado(401, mensaje);
    }
    static noEncontrado(mensaje) {
        return new ErrorCustomizado(404, mensaje);
    }
    static internalServer(mensaje) {
        return new ErrorCustomizado(500, mensaje);
    }
}
exports.ErrorCustomizado = ErrorCustomizado;
