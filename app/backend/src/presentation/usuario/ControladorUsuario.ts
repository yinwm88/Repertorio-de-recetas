import { Request, Response } from "express";
import { ErrorCustomizado } from "../../domain";
import { UsuarioService } from "../services";


export class ControladorUsuario {    
    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

    private manejarError = ( error:unknown, res: Response ) => {
        if (error instanceof ErrorCustomizado) {
            return res.status(error.codigoEstatus).json({ error: error.mensaje});
        }
        console.log( `${ error }` );
        return res.status( 500 ).json( { error: 'Internal server error' } );
    }   

    public cambiarContrasena = ( req: Request, res: Response ) => {


        this.usuarioService.cambiarContrasena()
        .then( usuario => res.status(200).json( usuario ))
        .catch( error => this.manejarError( error, res ));
    }
    
    public cambiarCorreo = ( req: Request, res: Response ) => {

        this.usuarioService.cambiarCorreo()
        .then( usuario => res.status(200).json( usuario ))
        .catch( error => this.manejarError( error, res ));
    }

    public cambiarPeso = ( req: Request, res: Response ) => {

        this.usuarioService.cambiarPeso()
        .then( usuario => res.status(200).json( usuario ))
        .catch( error => this.manejarError( error, res ));
    }
    
    public cambiarAltura = ( req: Request, res: Response ) => {

        this.usuarioService.cambiarAltura()
        .then( usuario => res.status(200).json( usuario ))
        .catch( error => this.manejarError( error, res ));
    }
}