
export class CrearUntensilioDto {
    private constructor(
        public readonly nombre: string,
        public readonly icono: string,
        public readonly sustitutos: { [key: string]: any },
    ) {}

    static crearInstancia( objeto: { [key: string]: any }): [string?, CrearUntensilioDto?] {
        const { nombre, icono, sustitutos } = objeto;
        if ( !nombre ) return ['Falta el nombre del ingrediente'];   
        if ( !icono ) return ['Faltan las calorias del ingrediente'];   
        if ( !sustitutos ) return ['Falta la unidad de medida del ingrediente'];   

        return [, new CrearUntensilioDto( nombre, icono, sustitutos )];
    }
}


