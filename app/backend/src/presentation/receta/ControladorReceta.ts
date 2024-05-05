import { Request, Response } from "express";
import { CrearRecetaDto, EditarRecetaDto, ErrorCustomizado, RecetaDto, RecetaIngredientesDto, RecetaUtensiliosDto } from "../../domain";
import { RecetaService } from "../services/receta.service";

export class ControladorRecetas{

    public constructor(
        private readonly recetaService: RecetaService
    ){}

    private manejarError = ( error:unknown, res: Response ) => {
        if (error instanceof ErrorCustomizado) {
            return res.status(error.codigoEstatus).json({ error: error.mensaje});
        }
        console.log( `${ error }` );
        return res.status( 500 ).json( { error: 'Internal server error' } );
    }

    public marcarFavorita = ( req:Request, res: Response ) => {
        const { idReceta, correo } = req.body;
        if (!idReceta) {
            return res.status(400).json({error: 'Falta el id de la receta'});
        }
        if (!correo) {
            return res.status(400).json({error: 'Falta el correo'});
        }
        this.recetaService.marcarFavorita( idReceta, correo )
        .then( receta => res.status(201).json( receta ))
        .catch( error => this.manejarError( error, res ));
    }    

    public crearReceta = ( req:Request, res: Response ) => {
        const [error, crearRecetaDto] = CrearRecetaDto.crearInstancia( req.body );
        if ( error ) return res.status(400).json({error:error});
        
        const [errorIngredientes, recetaIngredientesDto] = RecetaIngredientesDto.crearInstancia( crearRecetaDto!.ingredientes );
        if ( errorIngredientes ) return res.status(400).json(errorIngredientes);

        const [errorUtensilios, recetaUtensiliosDto] = RecetaUtensiliosDto.crearInstancia( crearRecetaDto!.ingredientes );
        if ( errorUtensilios ) return res.status(400).json( errorUtensilios );
        
        this.recetaService.crearReceta( crearRecetaDto!, req.body.usuario, recetaIngredientesDto!, recetaUtensiliosDto! )
        .then( datos => res.status(200).json( datos ))
        .catch( error => this.manejarError( error, res ));
   }
    
    public editarReceta = ( req:Request, res: Response ) => {
        const [error, editarRecetaDto] = EditarRecetaDto.crearInstancia( req.body );
        if (error) return res.status(400).json({error:error});
        const [erroringredientes, recetaIngredientesDto] = RecetaIngredientesDto.crearInstancia( editarRecetaDto!.ingredientes );
        if (erroringredientes) return res.status(400).json(erroringredientes);
        
        this.recetaService.editarReceta( editarRecetaDto!, req.body.usuario, recetaIngredientesDto! )
        .then( datos => res.status(200).json( datos ))
        .catch( error => this.manejarError( error, res ));
    }

    public eliminarReceta = ( req:Request, res: Response ) => {
        const [error, recetaDto] = RecetaDto.crearInstancia( req.body );
        if (error) return res.status(400).json({error:error});
        
        this.recetaService.eliminarReceta( recetaDto!, req.body.usuario )
        .then( datos => res.status(200).json( datos ))
        .catch( error => this.manejarError( error, res ));
    }
    
    public recetasFavoritas = ( req: Request, res: Response ) => {
        const { correo } = req.body;
        if (!correo) {
            return res.status(400).json({error:'Falta el correo del usuario'});
        }

        this.recetaService.recetasFavoritas( correo! )
        .then( recetas => res.status(200).json( recetas ))
        .catch( error => this.manejarError( error, res ));
    }

    public datosReceta = ( req: Request, res: Response ) => {
        const { idReceta } = req.params;
        if (!idReceta) return res.status(400).json({error: 'Falta el parametro idReceta '});
        
        this.recetaService.datosReceta( +idReceta )
        .then( recetas => res.status(200).json( recetas ))
        .catch( error => this.manejarError( error, res ));
    }

    public crearVariacion = ( req: Request, res: Response ) => {
        const [error, variacionReceta] = EditarRecetaDto.crearInstancia( req.body );
        if (error) return res.status(400).json({error:error});
        const [erroringredientes, recetaIngredientesDto] = RecetaIngredientesDto.crearInstancia( variacionReceta!.ingredientes );
        if (erroringredientes) return res.status(400).json(erroringredientes);

        this.recetaService.crearVariacionReceta( variacionReceta!, req.body.usuario, recetaIngredientesDto! )
        .then( datos => res.status(200).json( datos ))
        .catch( error => this.manejarError( error, res ));
    }

    public obtenerRecetasUsuario = ( req: Request, res: Response ) => {
        this.recetaService.obtenerRecetasUsuario( req.body.usuario )
        .then( recetas => res.status(200).json( recetas ))
        .catch( error => this.manejarError( error, res ));
    }
}