import jwt from 'jsonwebtoken';
import { envs } from './envs';


const JWT_SEED = envs.JWT_SEED;

export class GestorJwt {

    static async generarToken( payload:any, duration: string = '3h' ) {
        return new Promise((resolve) => {
            jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
                if ( err ) return resolve(null);

                resolve(token)
            });
        })
    }

    static validarToken<T>(token: string): Promise<T|null> {
        return new Promise( (resolve) => {
            jwt.verify( token, JWT_SEED, (err, decoded) => {
                if( err ) return resolve(null);
      
                resolve(decoded as T);
            });
        })
    }
}