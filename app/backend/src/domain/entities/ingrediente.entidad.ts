import { ErrorCustomizado } from "../error/customizar.error";

export class EntidadIngrediente{

    private constructor(
        public idIngrediente: number,
        public nombre: string,
        public calorias: number,
        public caduca: boolean,
        public unidad: string
    ){}

    static crearInstancia( objeto: { [ key: string ]: any; } ): EntidadIngrediente {
        const { idIngrediente, nombre, calorias, caduca, unidad } = objeto;

        if ( !idIngrediente ) throw ErrorCustomizado.badRequest( 'Falta el id del ingrdiente' );     
        if ( !nombre ) throw ErrorCustomizado.badRequest( 'Falta el nombre del ingrediente' );     
        if ( !calorias ) throw ErrorCustomizado.badRequest( 'Falta el número de calorias' );     
        if ( caduca === undefined ) throw ErrorCustomizado.badRequest( 'Falta el campo caduca' );   
        if ( !unidad ) throw ErrorCustomizado.badRequest( 'Falta la unidad' );  

        return new EntidadIngrediente( idIngrediente, nombre, calorias, caduca, unidad);
    }

}