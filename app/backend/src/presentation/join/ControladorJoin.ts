import { Request, Response } from "express";
import { ErrorCustomizado, IngresarUsuarioDto, RegistrarUsuarioDto } from "../../domain";
import { UsuarioService } from "../services/usuario.service";

export class ControladorJoin {
            
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

    public ingresarUsuario = ( req:Request, res: Response ) => {
        const [error, ingresarUsuarioDto ] = IngresarUsuarioDto.crearInstancia( req.body );
        if (error) {
            return res.status(400).json(error);
        }
        this.usuarioService.ingresarUsuario( ingresarUsuarioDto! )
        .then( usuario => res.status(200).json( usuario ))
        .catch( error => this.manejarError( error, res ));
    }   

    public registrarUsuario = ( req:Request, res: Response ) => { 
        const [error, registrarUsuarioDto ] = RegistrarUsuarioDto.crearInstancia( req.body );
        if (error) {
            return res.status(400).json(error);
        }
        this.usuarioService.registrarUsuario( registrarUsuarioDto! )
        .then( usuario => res.status(201).json( usuario ))
        .catch( error => this.manejarError( error, res ));
    }

    public validarCorreo = (req: Request, res: Response) => {
        const { token } = req.params;
        
        this.usuarioService.validarCorreo( token )
          .then( () => res.json('Correo validado') )
          .catch( error => this.manejarError(error, res) );
    
    }
}