import { Request, Response } from "express";
import { ErrorCustomizado, ManipularIngrediente } from "../../domain";
import { IngredienteService } from "../services/ingrediente.service";

export class ControladorInicio {
    
    constructor(
        private readonly ingredienteService: IngredienteService
    ) {}

    private manejarError = ( error:unknown, res: Response ) => {
        if (error instanceof ErrorCustomizado) {
            return res.status(error.codigoEstatus).json({ error: error.mensaje});
        }
        console.log( `${ error }` );
        return res.status( 500 ).json( { error: 'Internal server error' } );
    }

    public agregarIngrediente = ( req:Request, res: Response ) => {
        const [error, manipularIngredienteDto ] = ManipularIngrediente.crearInstancia( req.body );
        if (error) {
            return res.status(400).json(error);
        }
        this.ingredienteService.agregarIngrediente(manipularIngredienteDto!, req.body.usuario)
            .then( ingrediente => res.status(201).json( ingrediente ))
            .catch( error => this.manejarError( error, res ));
    }   
    
    
}