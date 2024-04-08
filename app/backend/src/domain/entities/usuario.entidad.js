"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntidadUsuario = void 0;
const customizar_error_1 = require("../error/customizar.error");
class EntidadUsuario {
    constructor(correo, contrasena, objetivo, apellido, nombre, talla, altura) {
        this.correo = correo;
        this.contrasena = contrasena;
        this.objetivo = objetivo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.talla = talla;
        this.altura = altura;
    }
    static crearInstancia(objeto) {
        const { nombre, apellido, correo, contrasena, objetivo, talla, altura } = objeto;
        if (!correo)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta el correo');
        if (!contrasena)
            throw customizar_error_1.ErrorCustomizado.badRequest('Falta la contraseña');
        return new EntidadUsuario(correo, contrasena, objetivo, apellido, nombre, talla, altura);
    }
}
exports.EntidadUsuario = EntidadUsuario;
