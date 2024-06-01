import { Request, Response } from "express";
import { CrearUntensilioDto, ErrorCustomizado } from "../../../domain";
import { UtensilioService } from "../../services";

export class controladorUtensilio {

    constructor(
        private readonly utensilioService: UtensilioService
    ) {}

    private manejarError = ( error:unknown, res: Response ) => {
        if (error instanceof ErrorCustomizado) {
            return res.status(error.codigoEstatus).json({ error: error.mensaje});
        }
        console.log( `${ error }` );
        return res.status( 500 ).json( { error: 'Internal server error' } );
    }

    public activarUtensilio = ( req: Request, res: Response ) => {
        const { idUtensilio } = req.params;
        if ( +idUtensilio <= 0 ) return res.status(400).json({error:'El id debe de ser positivo'});

        this.utensilioService.activarUtensilio( +idUtensilio, req.body.usuario )
        .then( utensilio => res.status(200).json( utensilio ))
        .catch( error => this.manejarError( error, res ));
    }

    public desactivarUtensilio = ( req: Request, res: Response) => {
        const { idUtensilio } = req.params;
        if ( +idUtensilio <= 0 ) return res.status(400).json({error:'El id debe de ser positivo'});

        this.utensilioService.desactivarUtensilio( +idUtensilio, req.body.usuario )
        .then( utensilio => res.status(200).json( utensilio ))
        .catch( error => this.manejarError( error, res ));
    }

    public buscarUtensilio = ( req: Request, res: Response) => {
        const { utensilio } = req.body;
        if ( !utensilio ) return res.status(400).json({error:'Falta el nombre del utensilio'});

        this.utensilioService.buscarUtensilio( utensilio )
        .then( utensilio => res.status(200).json( utensilio ))
        .catch( error => this.manejarError( error, res ));
    }
    
    public obtenerUtensilios = ( req: Request, res: Response) => {
        this.utensilioService.obtenerUtensilios( req.body.usuario )
        .then( utensilio => res.status(200).json( utensilio ))
        .catch( error => this.manejarError( error, res ));
    }
    
    public datosUtensilio = ( req: Request, res: Response ) => {
        const { id } = req.body;
        if( !id ) return res.status(400).json({error:'Falta el id del utensilio'});

        this.utensilioService.datosUtensilio( id )
        .then( utensilio => res.status(200).json( utensilio ))
        .catch( error => this.manejarError( error, res ));
    }

    public crearUtensilio = ( req: Request, res: Response ) => {
        const [ error, informacionUtensilio ] = CrearUntensilioDto.crearInstancia( req.body );       
        if ( error ) return res.status(400).json({error: error});

        this.utensilioService.crearUtensilio( informacionUtensilio! )
        .then( utensilio => res.status(200).json( utensilio ))
        .catch( error => this.manejarError( error, res ))
    }
}