import { Ingrediente } from "../../interfaces/Ingrediente.interface";

export class RecetaIngredientesDto {
    private constructor(
        public readonly ingredientes: Ingrediente[]
    ) {}

    static crearInstancia( ingredientes: Ingrediente[]): [string?, RecetaIngredientesDto?] {
        if (ingredientes.length == 0) return ['Faltan los ingredientes'];
        ingredientes.forEach( ingrediente => {
            if( !ingrediente.idIngrediente ) return ['Falta el idIngrediente de un ingrediente'];
            if( !ingrediente.cantidad ) return ['Falta la cantidad del ingrediente'];
        });
        return [, new RecetaIngredientesDto(ingredientes)];
    }
}