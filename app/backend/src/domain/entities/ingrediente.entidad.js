"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntidadIngrediente = void 0;
const customizar_error_1 = require("../error/customizar.error");
class EntidadIngrediente {
    constructor(idIngrediente, nombre, calorias, caduca, unidad) {
        this.idIngrediente = idIngrediente;
        this.nombre = nombre;
        this.calorias = calorias;
        this.caduca = caduca;
        this.unidad = unidad;
    }
    static crearInstancia(objeto) {
        const { idIngrediente, nombre, calorias, caduca, unidad } = objeto;
        if (!idIngrediente)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el id del ingrdiente');
        if (!nombre)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el nombre del ingrediente');
        if (!calorias)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el número de calorias');
        if (caduca === undefined)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el campo caduca');
        if (!unidad)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta la unidad');
        return new EntidadIngrediente(idIngrediente, nombre, calorias, caduca, unidad);
    }
}
exports.EntidadIngrediente = EntidadIngrediente;
