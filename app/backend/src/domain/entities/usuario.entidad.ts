import { ErrorCustomizado } from "../error/customizar.error";


export class EntidadUsuario {

    private constructor(
        public correo: string,
        public contrasena: string,
        public objetivo?: string,
        public apellido?: string,
        public nombre?: string,
        public talla?: number,
        public altura?: number
    ) {}

    static crearInstancia( objeto: { [ key: string ]: any; } ): EntidadUsuario {
        const { nombre, apellido, correo, contrasena, objetivo, talla, altura} = objeto;

        if ( !correo ) throw ErrorCustomizado.badRequest( 'Falta el correo' );     
        if ( !contrasena ) throw ErrorCustomizado.badRequest( 'Falta la contraseña' );     

        return new EntidadUsuario( correo, contrasena, objetivo, apellido, nombre, talla, altura);
    }

}