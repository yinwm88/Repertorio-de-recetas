"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarUsuarioDto = void 0;
const config_1 = require("../../../config");
class RegistrarUsuarioDto {
    constructor(correo, contrasena, nombre, apellido) {
        this.correo = correo;
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    static crearInstancia(objeto) {
        const { correo, contrasena, nombre, apellido } = objeto;
        if (!correo) {
            return ['Falta el correo del usuario'];
        }
        if (!nombre) {
            return ['Falta el nombre del usuario'];
        }
        if (!apellido) {
            return ['Falta el apellido del usuario'];
        }
        if (!contrasena) {
            return ['Falta la contraseña del usuario'];
        }
        if (!config_1.ExpresionRegular.email.test(correo)) {
            return ['Correo no valido'];
        }
        return [, new RegistrarUsuarioDto(correo, contrasena, nombre, apellido)];
    }
}
exports.RegistrarUsuarioDto = RegistrarUsuarioDto;
