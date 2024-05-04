
enum UnidadMedida {
    gramo = 'g',
    kiloGramo = "kg",
    onza = "oz",
    litro = "l",
    miliLitro = "mil",
    taza = "taza",
    cuchara = "chucharada"
}

export class ManipularIngredienteDto {

    private constructor(
        public readonly idIngrediente: number,
        public readonly cantidad: number,
        public readonly unidad: UnidadMedida,
    ) {}

    static crearInstancia( objeto: { [key: string]: any }): [string?, ManipularIngredienteDto?] {
        const {idIngrediente, cantidad, unidad } = objeto;
        if (!idIngrediente) return ['Falta el id del ingrediente'];   
        if (!cantidad) return ['Falta la cantidad del ingrediente'];   
        if (!unidad) return ['Falta la unidad de medida del ingrediente'];   
        if (+cantidad <= 0) return ['La cantida tiene que ser positiva'];

        return [, new ManipularIngredienteDto(+idIngrediente, cantidad, unidad)];
    }
}