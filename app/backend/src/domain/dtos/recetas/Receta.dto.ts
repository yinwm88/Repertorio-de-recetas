export class RecetaDto{

    private constructor(
        public readonly idReceta: number
    ){}

    static crearInstancia( objeto: { [key: string]: any }): [string?, RecetaDto?] {
        const { idReceta } = objeto;

        if (!idReceta) return ['Falta el id de la receta'];     

        return [, new RecetaDto( idReceta )];
    }

}