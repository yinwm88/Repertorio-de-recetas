export class RecetaDto{

    private constructor(
        public readonly idReceta: number,
        public readonly nombre: string,
        public readonly tiempo: number,
        public readonly proceso: string,
    ){}

    static crearInstancia( objeto: { [key: string]: any }): [string?, RecetaDto?] {
        const { idReceta, nombre, tiempo, proceso } = objeto;

        if (!idReceta) return ['Falta el id de la receta'];   
        if (!nombre) return ['Falta el nombre de la receta'];   
        if (!tiempo) return ['Falta el tiempo de la receta'];     
        if (!proceso) return ['Falta el proceso de la receta'];     

        if ( +tiempo < 0 ) return ['El timpo debe de ser positivo'];     

        return [, new RecetaDto( idReceta, nombre, tiempo, proceso )];
    }

}