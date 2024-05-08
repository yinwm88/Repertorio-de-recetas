interface Utensilio {
    idUtensilio: number
}

export class RecetaUtensiliosDto {
    private constructor(
        public readonly utensilios: Utensilio[]
    ) {}

    static crearInstancia( utensilios: Utensilio[]): [string?, RecetaUtensiliosDto?] {
        if ( utensilios.length == 0 ) return ['Faltan los utensilios'];
        utensilios.forEach( utensilio => {
            if( !utensilio.idUtensilio ) return ['Falta el idUtensilio de un utensilio'];
        });
        return [, new RecetaUtensiliosDto( utensilios )];
    }
}