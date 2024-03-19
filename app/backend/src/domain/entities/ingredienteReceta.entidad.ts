import { ErrorCustomizado } from "../error/customizar.error";

export class IngredienteReceta {

    private constructor(
        public idReceta: number,
        public idIngrediente: number,
        public cantidad: number
    ){}

    static crearInstancia(objeto : {[key : string] : any; }) : IngredienteReceta{
        const { idReceta, idIngrediente, cantidad } = objeto;
        if ( !idReceta ) throw ErrorCustomizado.badRequest( 'Falta el id de la receta' );
        if ( !idIngrediente ) throw ErrorCustomizado.badRequest( 'Falta el id del ingrediente' );
        if ( !cantidad ) throw ErrorCustomizado.badRequest( 'Falta la cantidad' );

        return new IngredienteReceta( idReceta, idIngrediente, cantidad );
    }
}