"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientesRecetasDto = void 0;
class IngredientesRecetasDto {
    constructor(correo) {
        this.correo = correo;
    }
    static crearInstancia(objeto) {
        const { correo } = objeto;
        if (!correo) {
            return ['Falta el correo del usuario'];
        }
        return [, new IngredientesRecetasDto(correo)];
    }
}
exports.IngredientesRecetasDto = IngredientesRecetasDto;
