"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManipularIngredienteDto = void 0;
var UnidadMedida;
(function (UnidadMedida) {
    UnidadMedida["gramo"] = "g";
    UnidadMedida["kiloGramo"] = "kg";
    UnidadMedida["onza"] = "oz";
    UnidadMedida["litro"] = "l";
    UnidadMedida["miliLitro"] = "mil";
    UnidadMedida["taza"] = "taza";
    UnidadMedida["cuchara"] = "chucharada";
})(UnidadMedida || (UnidadMedida = {}));
class ManipularIngredienteDto {
    constructor(idIngrediente, cantidad, unidad) {
        this.idIngrediente = idIngrediente;
        this.cantidad = cantidad;
        this.unidad = unidad;
    }
    static crearInstancia(objeto) {
        const { idIngrediente, cantidad = 1, unidad } = objeto;
        if (!idIngrediente)
            return ['Falta el id del ingrediente'];
        if (!cantidad)
            return ['Falta la cantidad del ingrediente'];
        if (!unidad)
            return ['Falta la unidad de medida del ingrediente'];
        return [, new ManipularIngredienteDto(+idIngrediente, cantidad, unidad)];
    }
}
exports.ManipularIngredienteDto = ManipularIngredienteDto;
