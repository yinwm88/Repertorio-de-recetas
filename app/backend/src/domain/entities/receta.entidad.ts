import { ErrorCustomizado } from "../error/customizar.error";

export class EntidadReceta{

    private constructor(
        public idReceta: number,
        public nombre: string,
        public proceso: string,
        public tiempo: number,
    ){}

    public static crearInstancia(objeto: { [ key: string ]: any; }): EntidadReceta {
        const { idreceta, nombre, proceso, tiempo} = objeto;
        if ( !idreceta ) throw ErrorCustomizado.badRequest( 'Falta el id de la receta' );
        if ( !nombre ) throw ErrorCustomizado.badRequest( 'Falta el nombre de la receta' );
        if ( !proceso ) throw ErrorCustomizado.badRequest( 'Falta el proceso de la receta' );
        if ( !tiempo ) throw ErrorCustomizado.badRequest( 'Faltan los id de los ingredientes' );

        return new EntidadReceta( idreceta, nombre, proceso, tiempo );
    }
}
