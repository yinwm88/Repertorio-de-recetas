"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecetaDto = void 0;
class RecetaDto {
    constructor(idReceta) {
        this.idReceta = idReceta;
    }
    static crearInstancia(objeto) {
        const { idReceta } = objeto;
        if (!idReceta)
            return ['Falta el id de la receta'];
        return [, new RecetaDto(idReceta)];
    }
}
exports.RecetaDto = RecetaDto;
