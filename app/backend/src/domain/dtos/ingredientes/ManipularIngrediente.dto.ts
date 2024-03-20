
export class ManipularIngredienteDto {

    private constructor(
        public readonly idIngrediente: number,
        // TODO: Se agregara despues tambien la cantidad, unida y la fecha en la que se agrego
        public readonly cantidad: number,
        // public readonly unidad: enum,
        // public readonly fecha: Date,
    ) {}

    static crearInstancia( objeto: { [key: string]: any }): [string?, ManipularIngredienteDto?] {
        const {idIngrediente, cantidad = 1 } = objeto;
        if (!idIngrediente) {
            return ['Falta el id del ingrediente'];   
        }
        return [, new ManipularIngredienteDto(+idIngrediente, cantidad)];
    }
}