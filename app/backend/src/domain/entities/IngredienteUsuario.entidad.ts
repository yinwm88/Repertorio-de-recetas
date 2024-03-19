import { ErrorCustomizado } from "../error/customizar.error";


export class IngredienteUsuario {

    private constructor(
        public idingrediente: number,
        public nombre: string,
        public cantidad?: number,
        public unidad?: string,
        public fechacaducidad?: Date,
        public fecha?: Date,
        public caduca?: boolean
    ) {}

    static crearInstancia( objeto: { [ key: string ]: any; } ): IngredienteUsuario {
        const { idingrediente, cantidad, fecha, fechacaducidad, ingrediente} = objeto;
        const { nombre, unidad, caduca } = ingrediente;
        if ( !idingrediente ) throw ErrorCustomizado.badRequest( 'Falta el id del ingrdiente' );     
        if ( !nombre ) throw ErrorCustomizado.badRequest( 'Falta el nombre del ingrediente' );     

        return new IngredienteUsuario( idingrediente, nombre, cantidad, unidad, fechacaducidad, fecha, caduca );
    }

}