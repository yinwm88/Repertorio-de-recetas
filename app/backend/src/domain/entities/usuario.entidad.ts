import { ErrorCustomizado } from "../error/customizar.error";


export class EntidadUsuario {

    private constructor(
        public nombre: string,
        public correo: string,
        public password: string,
        public objetivo?: string,
        public talla?: number,
        public altura?: number
    ) {}

    static crearInstancia( objeto: { [ key: string ]: any; } ): EntidadUsuario {
        const { idUsuario, nombre, correo, password, objetivo, talla, altura} = objeto;
        if ( !idUsuario ) throw ErrorCustomizado.badRequest( 'Falta el id.' );   

        if ( !correo ) throw ErrorCustomizado.badRequest( 'Falta el correo' );     
        if ( !password ) throw ErrorCustomizado.badRequest( 'Falta la contraseña' );     
        if ( !nombre ) throw ErrorCustomizado.badRequest( 'Falta el nombre' );     

        return new EntidadUsuario(nombre, correo, password, objetivo, talla, altura);
    }

}