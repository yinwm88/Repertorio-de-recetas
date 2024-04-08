"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredienteReceta = void 0;
const customizar_error_1 = require("../error/customizar.error");
class IngredienteReceta {
    constructor(idReceta, idIngrediente, cantidad) {
        this.idReceta = idReceta;
        this.idIngrediente = idIngrediente;
        this.cantidad = cantidad;
    }
    static crearInstancia(objeto) {
        const { idReceta, idIngrediente, cantidad } = objeto;
        if (!idReceta)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el id de la receta');
        if (!idIngrediente)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el id del ingrediente');
        if (!cantidad)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta la cantidad');
        return new IngredienteReceta(idReceta, idIngrediente, cantidad);
    }
}
exports.IngredienteReceta = IngredienteReceta;
