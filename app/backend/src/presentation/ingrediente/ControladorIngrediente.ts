import { Request, Response } from "express";
import { CrearIngredienteDto, ErrorCustomizado, IngredientesRecetasDto, ManipularIngredienteDto } from "../../domain";
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
            return res.status(400).json({error: error});
        }
        this.ingredienteService.agregarIngrediente(manipularIngredienteDto!, req.body.usuario)
        .then( ingrediente => res.status(201).json( ingrediente ))
        .catch( error => this.manejarError( error, res ));
    }   
    
    public editarIngrediente = ( req:Request, res: Response ) => {
        const [error, manipularIngredienteDto ] = ManipularIngredienteDto.crearInstancia( req.body );
        if (error) {
            return res.status(400).json({error: error});
        }
        this.ingredienteService.editarIngrediente(manipularIngredienteDto!, req.body.usuario)
        .then( ingrediente => res.status(201).json( ingrediente ))
        .catch( error => this.manejarError( error, res ));
    }   
    
    
    public eliminarIngrediente = ( req:Request, res: Response ) => {
        const idIngrediente: number = +req.params.id;
        if ( !idIngrediente ) res.status(400).json({error: 'Falta el id ingrediente'});
        if ( idIngrediente <= 0) res.status(400).json({error: 'El id debe de ser uno valido'});

        this.ingredienteService.eliminarIngrediente( idIngrediente, req.body.usuario )
            .then( ingrediente => res.status(200).json( ingrediente ))
            .catch( error => this.manejarError( error, res ));
    }   
    
    public buscarIngrediente = ( req:Request, res: Response ) => {
        const { ingrediente } = req.body;
        if (!ingrediente) {
            return res.status(400).json({error:'Hace falta el ingrediente'});
        }

        this.ingredienteService.buscarIngrediente( req.body.ingrediente )
        .then( ingredientes => res.status(200).json( ingredientes ))
        .catch( error => this.manejarError( error, res ));
    }

    public datosIngrediente = ( req:Request, res:Response ) => {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({error:'Hace falta el id'});
        }

        this.ingredienteService.getDatosIngrediente( req.body.id )
        .then( ingrediente => res.status(200).json( ingrediente ))
        .catch( error => this.manejarError( error, res ));
    }

    public crearIngrediente = ( req:Request, res:Response ) => {
        const [ error, informacionIngrediente ] = CrearIngredienteDto.crearInstancia( req.body );
        if ( error ) return res.status(400).json({error: error});

        this.ingredienteService.crearIngrediente( informacionIngrediente! )
        .then( ingrediente => res.status(200).json( ingrediente ))
        .catch( error => this.manejarError( error, res ))
    }

    public listaCompras = (req : Request, res : Response) => {
        const { correo } = req.body;
        if (!correo) {
            return res.status(400).json({error:'Hace falta el correo'});
        }

        this.ingredienteService.listaDeCompras( correo )
        .then( ingredientes => res.status(200).json( ingredientes ))
        .catch( error => this.manejarError( error, res ))
    }

    public comprarIngrediente = ( req:Request, res: Response ) => {
        const { idingrediente, correo } = req.body;
        if ( idingrediente <= 0) res.status(400).json({error: 'El id debe de ser uno valido'});
        if (!correo) return res.status(400).json({error:'Hace falta el correo'});

        this.ingredienteService.comprarIngredienteFaltante( correo, idingrediente )
        .then( ingrediente => res.status(200).json( ingrediente ))
        .catch( error => this.manejarError( error, res ));
    }  
}