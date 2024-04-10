import { Request, Response } from "express";
import { ErrorCustomizado, IngredientesRecetasDto, ManipularIngredienteDto } from "../../domain";
import { IngredienteService } from "../services/ingrediente.service";

export class ControladorIngrediente {
    
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
        const [error, manipularIngredienteDto ] = ManipularIngredienteDto.crearInstancia( req.body );
        if (error) {
            return res.status(400).json(error);
        }
        this.ingredienteService.agregarIngrediente(manipularIngredienteDto!, req.body.usuario)
        .then( ingrediente => res.status(201).json( ingrediente ))
        .catch( error => this.manejarError( error, res ));
    }   
    
    public editarIngrediente = ( req:Request, res: Response ) => {
        const [error, manipularIngredienteDto ] = ManipularIngredienteDto.crearInstancia( req.body );
        if (error) {
            return res.status(400).json(error);
        }
        this.ingredienteService.editarIngrediente(manipularIngredienteDto!, req.body.usuario)
        .then( ingrediente => res.status(201).json( ingrediente ))
        .catch( error => this.manejarError( error, res ));
    }   
    
    
    public eliminarIngrediente = ( req:Request, res: Response ) => {
        const [error, manipularIngredienteDto ] = ManipularIngredienteDto.crearInstancia( req.body );
        if (error) {
            return res.status(400).json(error);
        }
        this.ingredienteService.eliminarIngrediente(manipularIngredienteDto!, req.body.usuario)
            .then( ingrediente => res.status(200).json( ingrediente ))
            .catch( error => this.manejarError( error, res ));
    }   
    
    public buscarIngrediente = ( req:Request, res: Response ) => {
        const { ingrediente } = req.body;
        if (!ingrediente) {
            return res.status(400).json('Hace falta el ingrediente');
        }

        this.ingredienteService.buscarIngrediente( req.body.ingrediente )
        .then( ingredientes => res.status(200).json( ingredientes ))
        .catch( error => this.manejarError( error, res ));
    }
}