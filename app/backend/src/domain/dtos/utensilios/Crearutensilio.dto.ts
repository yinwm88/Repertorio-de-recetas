
export class CrearUntensilioDto {
    private constructor(
        public readonly nombre: string,
        public readonly icono: string,
    ) {}

    static crearInstancia( objeto: { [key: string]: any }): [string?, CrearUntensilioDto?] {
        const { nombre, icono } = objeto;
        if ( !nombre ) return ['Falta el nombre del ingrediente'];   
        if ( !icono ) return ['Faltan las calorias del ingrediente'];   

        return [, new CrearUntensilioDto( nombre, icono )];
    }
}


