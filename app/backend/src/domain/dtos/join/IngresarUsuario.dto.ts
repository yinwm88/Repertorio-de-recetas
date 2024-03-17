import { ExpresionRegular } from "../../../config";


export class IngresarUsuarioDto {

    private constructor(
        public readonly correo: string, 
        public readonly contrasena: string 
    ) {}

    static crearInstancia( objeto: { [key: string]: any }): [string?, IngresarUsuarioDto?] {
        const { correo, contrasena } = objeto;
        if (!correo) {
            return ['Falta el correo del usuario'];   
        }
        if (!contrasena) {
            return ['Falta la contraseña del usuario'];   
        }
        if ( !ExpresionRegular.email.test(correo) ) {
            return ['Correo no valido'];   
        }

        return [, new IngresarUsuarioDto( correo, contrasena )];
    }

}
