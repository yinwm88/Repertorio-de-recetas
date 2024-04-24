import * as crypto from 'crypto';

export class Encriptador {
    constructor() {}

    public static crearHash (contrasena: string): string[] {
        const salt: string = crypto.randomBytes(16).toString('hex');
        const hash: string = crypto.pbkdf2Sync(contrasena, salt, 1000, 54, `sha512`).toString(`hex`);

        return [hash, salt];
    }

    public static compararContrasena (contrasena: string, hashed:string, salt:string): boolean {
        const hash: string = crypto.pbkdf2Sync(contrasena, salt, 1000, 54, `sha512`).toString(`hex`);
        return hash === hashed;
    }

}