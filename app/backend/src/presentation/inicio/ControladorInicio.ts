import { Request, Response } from "express";
import { ErrorCustomizado, IngredientesRecetasDto, ManipularIngredienteDto } from "../../domain";
import { IngredienteService } from "../services/ingrediente.service";
import { RecetaService } from "../services/receta.service";

export class ControladorInicio {
    
    constructor(
        private readonly ingredienteService: IngredienteService,
        private readonly recetaService: RecetaService
    ) {}

    private manejarError = ( error:unknown, res: Response ) => {
        if (error instanceof ErrorCustomizado) {
            return res.status(error.codigoEstatus).json({ error: error.mensaje});
        }
        console.log( `${ error }` );
        return res.status( 500 ).json( { error: 'Internal server error' } );
    }

    public obtenerIngredientesUsuario = ( req:Request, res: Response ) => {
        const [error, ingredientesRecetasDto ] = IngredientesRecetasDto.crearInstancia( req.body );
        if (error) {
            return res.status(400).json(error);
        }
        
        this.ingredienteService.obtenerIngredientesUsuario( ingredientesRecetasDto! )
        .then( ingredientes => res.status(200).json( ingredientes ))
        .catch( error => this.manejarError( error, res ));
    }

    public generarRecetas = ( req:Request, res: Response ) => {
        const [error, ingredientesRecetasDto ] = IngredientesRecetasDto.crearInstancia( req.body );
         if (error) {
         return res.status(400).json(error);
         }

         this.recetaService.generarRecetas( ingredientesRecetasDto! )
         .then( recetas => res.status(201).json( recetas ))
         .catch( error => this.manejarError( error, res ));
     }
    
}