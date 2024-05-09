
export class RecetaUtensiliosDto {
    private constructor(
        public readonly utensilios: number[]
    ) {}

    static crearInstancia( utensilios: number[]): [string?, RecetaUtensiliosDto?] {
        if ( utensilios.length == 0 ) return ['Faltan los utensilios'];
        utensilios.forEach( utensilio => {
            if( !utensilio ) return ['Falta el idUtensilio de un utensilio'];
        });
        return [, new RecetaUtensiliosDto( utensilios )];
    }
}