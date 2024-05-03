import { Request, Response } from "express";
import { ErrorCustomizado } from "../../../domain";
import { UtensilioService } from "../../services";
import { error } from "console";

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
        if ( !idUtensilio ) return res.status(400).json({error:'Falta el idUtensilio'});

        this.utensilioService.activarUtensilio( +idUtensilio )
        .then( utensilio => res.status(200).json( utensilio ))
        .catch( error => this.manejarError( error, res ));
    }

    public desactivarUtensilio = ( req: Request, res: Response) => {
        const { idUtensilio } = req.params;
        if ( !idUtensilio ) return res.status(400).json({error:'Falta el idUtensilio'});

        this.utensilioService.desactivarUtensilio( +idUtensilio )
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
        this.utensilioService.obtenerUtensilios()
        .then( utensilio => res.status(200).json( utensilio ))
        .catch( error => this.manejarError( error, res ));
    }
    
}