enum UnidadMedida {
    gramo = 'g',
    kiloGramo = "kg",
    onza = "oz",
    litro = "l",
    miliLitro = "mil",
    taza = "taza",
    cuchara = "chucharada"
}

export class CrearIngredienteDto {
    private constructor(
        public readonly nombre: string,
        public readonly calorias: number,
        public readonly unidad: UnidadMedida,
        public readonly caduca: boolean,
    ) {}

    static crearInstancia( objeto: { [key: string]: any }): [string?, CrearIngredienteDto?] {
        const { nombre, calorias, unidad, caduca } = objeto;
        if ( !nombre ) return ['Falta el nombre del ingrediente'];   
        if ( !calorias ) return ['Faltan las calorias del ingrediente'];   
        if ( +calorias  <= 0 ) return ['La cantidad de calorias tiene que ser positiva'];
        if ( !unidad ) return ['Falta la unidad de medida del ingrediente'];   
        if ( !caduca ) return ['Falta saber si en ingrediente caduca ingrediente'];   

        return [, new CrearIngredienteDto( nombre, +calorias, unidad, caduca )];
    }
}


