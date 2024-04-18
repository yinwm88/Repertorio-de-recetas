

export class RecetaIngredientesDto {
    private constructor(
        public readonly ingredientes: any[]
    ) {}

    static crearInstancia( arreglo: any[]): [string?, RecetaIngredientesDto?] {
        if (arreglo.length == 0) return ['Faltan los ingredientes'];
        const ingredientes: number[] = [];
        arreglo.forEach( ingrediente => {
            if( !ingrediente.idIngrediente ) return ['Falta el idIngrediente de un ingrediente'];
            if( !ingrediente.cantidad ) return ['Falta la cantidad del ingrediente'];
        });
        return [, new RecetaIngredientesDto(ingredientes)];
    }
}