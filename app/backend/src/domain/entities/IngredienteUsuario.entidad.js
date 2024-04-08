"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredienteUsuario = void 0;
const customizar_error_1 = require("../error/customizar.error");
class IngredienteUsuario {
    constructor(idingrediente, nombre, cantidad, unidad, fechacaducidad, fecha, caduca) {
        this.idingrediente = idingrediente;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.unidad = unidad;
        this.fechacaducidad = fechacaducidad;
        this.fecha = fecha;
        this.caduca = caduca;
    }
    static crearInstancia(objeto) {
        const { idingrediente, cantidad, fecha, fechacaducidad, ingrediente } = objeto;
        const { nombre, unidad, caduca } = ingrediente;
        if (!idingrediente)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el id del ingrdiente');
        if (!nombre)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el nombre del ingrediente');
        return new IngredienteUsuario(idingrediente, nombre, cantidad, unidad, fechacaducidad, fecha, caduca);
    }
}
exports.IngredienteUsuario = IngredienteUsuario;
