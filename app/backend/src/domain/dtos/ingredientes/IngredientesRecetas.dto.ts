
export class IngredientesRecetasDto {
    
    private constructor(
        public readonly correo: string,

    ) {}

    static crearInstancia( objeto: { [key: string]: any }): [string?, IngredientesRecetasDto?] {
        const { correo } = objeto;
        if (!correo) {
            return ['Falta el correo del usuario']
        }

        return [, new IngredientesRecetasDto( correo )];
    }
}