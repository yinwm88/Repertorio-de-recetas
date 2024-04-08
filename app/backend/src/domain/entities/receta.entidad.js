"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntidadReceta = void 0;
const customizar_error_1 = require("../error/customizar.error");
class EntidadReceta {
    constructor(idReceta, nombre, proceso, tiempo) {
        this.idReceta = idReceta;
        this.nombre = nombre;
        this.proceso = proceso;
        this.tiempo = tiempo;
    }
    static crearInstancia(objeto) {
        const { idreceta, nombre, proceso, tiempo } = objeto;
        if (!idreceta)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el id de la receta');
        if (!nombre)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el nombre de la receta');
        if (!proceso)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el proceso de la receta');
        if (!tiempo)
            throw customizar_error_1.ErrorCustomizado.badRequest('Faltan los id de los ingredientes');
        return new EntidadReceta(idreceta, nombre, proceso, tiempo);
    }
}
exports.EntidadReceta = EntidadReceta;
