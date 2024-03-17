import { ExpresionRegular } from "../../../config";

export class RegistrarUsuarioDto {

    private constructor(
        public readonly correo: string, 
        public readonly contrasena: string, 
        public readonly nombre: string,
        public readonly apellido: string 
    ) {}

    static crearInstancia( objeto: { [key: string]: any }): [string?, RegistrarUsuarioDto?] {
        const { correo, contrasena, nombre, apellido } = objeto;
        if (!correo) {
            return ['Falta el correo del usuario'];   
        }
        if (!nombre) {
            return ['Falta el nombre del usuario'];   
        }
        if (!apellido) {
            return ['Falta el apellido del usuario'];   
        }
        if (!contrasena) {
            return ['Falta la contraseña del usuario'];   
        }
        if ( !ExpresionRegular.email.test(correo) ) {
            return ['Correo no valido'];   
        }

        return [, new RegistrarUsuarioDto( correo, contrasena, nombre, apellido )];
    }


}