"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngresarUsuarioDto = void 0;
const config_1 = require("../../../config");
class IngresarUsuarioDto {
    constructor(correo, contrasena) {
        this.correo = correo;
        this.contrasena = contrasena;
    }
    static crearInstancia(objeto) {
        const { correo, contrasena } = objeto;
        if (!correo) {
            return ['Falta el correo del usuario'];
        }
        if (!contrasena) {
            return ['Falta la contraseña del usuario'];
        }
        if (!config_1.ExpresionRegular.email.test(correo)) {
            return ['Correo no valido'];
        }
        return [, new IngresarUsuarioDto(correo, contrasena)];
    }
}
exports.IngresarUsuarioDto = IngresarUsuarioDto;
