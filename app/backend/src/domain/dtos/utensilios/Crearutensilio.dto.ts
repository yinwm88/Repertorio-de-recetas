
export class CrearUntensilioDto {
    private constructor(
        public readonly nombre: string,
        public readonly icono: string,
    ) {}

    static crearInstancia( objeto: { [key: string]: any }): [string?, CrearUntensilioDto?] {
        const { nombre, icono } = objeto;
        if ( !nombre ) return ['Falta el nombre del utensilio'];   
        if ( !icono ) return ['Faltan el icono del utensilio'];   

        return [, new CrearUntensilioDto( nombre, icono )];
    }
}


