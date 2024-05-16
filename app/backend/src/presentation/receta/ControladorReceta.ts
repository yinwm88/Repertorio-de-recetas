import { Request, Response } from "express";
import { CrearReceta, CrearRecetaDto, EditarReceta, EditarRecetaDto, ErrorCustomizado, RecetaDto, RecetaIngredientesDto, RecetaUtensiliosDto } from "../../domain";
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
        if ( errorIngredientes ) return res.status(400).json({ error:errorIngredientes});
        const [errorUtensilios, recetaUtensiliosDto] = RecetaUtensiliosDto.crearInstancia( crearRecetaDto!.utensilios );
        if ( errorUtensilios ) return res.status(400).json({error:errorUtensilios});
        
        const informacionReceta:CrearReceta = {
            datosReceta: crearRecetaDto!,
            usuario:  req.body.usuario,
            ingredientes: recetaIngredientesDto!,
            utensilios: recetaUtensiliosDto!
        } 
        this.recetaService.crearReceta( informacionReceta )
        .then( datos => res.status(200).json( datos ))
        .catch( error => this.manejarError( error, res ));
    }
    
    public editarReceta = ( req:Request, res: Response ) => {
        const [error, editarRecetaDto] = EditarRecetaDto.crearInstancia( req.body );
        if (error) return res.status(400).json({error:error});
        const [erroringredientes, recetaIngredientesDto] = RecetaIngredientesDto.crearInstancia( editarRecetaDto!.ingredientes );
        if (erroringredientes) return res.status(400).json({error: erroringredientes});
        const [errorUtensilios, recetaUtensiliosDto] = RecetaUtensiliosDto.crearInstancia( editarRecetaDto!.utensilios );
        if ( errorUtensilios ) return res.status(400).json({error:errorUtensilios});

        const informacionReceta:EditarReceta = {
            datosReceta: editarRecetaDto!,
            usuario:  req.body.usuario,
            ingredientes: recetaIngredientesDto!,
            utensilios: recetaUtensiliosDto!
        } 
        this.recetaService.editarReceta( informacionReceta )
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
        if (erroringredientes) return res.status(400).json({error: erroringredientes});
        const [errorUtensilios, recetaUtensiliosDto] = RecetaUtensiliosDto.crearInstancia( variacionReceta!.utensilios );
        if ( errorUtensilios ) return res.status(400).json({error:errorUtensilios});
        const informacionReceta:EditarReceta = {
            datosReceta: variacionReceta!,
            usuario:  req.body.usuario,
            ingredientes: recetaIngredientesDto!,
            utensilios: recetaUtensiliosDto!
        } 
        this.recetaService.crearVariacionReceta( informacionReceta )
        .then( datos => res.status(200).json( datos ))
        .catch( error => this.manejarError( error, res ));
    }

    public obtenerRecetasUsuario = ( req: Request, res: Response ) => {
        this.recetaService.obtenerRecetasUsuario( req.body.usuario )
        .then( recetas => res.status(200).json( recetas ))
        .catch( error => this.manejarError( error, res ));
    }

    public borrarRecetaUsuario = ( req:Request, res: Response ) => {
        const { idReceta, correo } = req.body;
        if (!idReceta) {
            return res.status(400).json({error: 'Falta el id de la receta'});
        }
        if (!correo) {
            return res.status(400).json({error: 'Falta el correo'});
        }
        this.recetaService.borrarReceta( correo, idReceta )
        .then( receta => res.status(201).json( receta ))
        .catch( error => this.manejarError( error, res ));
    }  

    public crearListaCompras = (req: Request, res: Response) => {
        const { idReceta, correo } = req.body;
        if (!idReceta) {
            return res.status(400).json({error: 'Falta el id de la receta'});
        }
        if (!correo) {
            return res.status(400).json({error: 'Falta el correo'});
        }
        this.recetaService.crearListaCompra( correo, idReceta )
        .then( lista => res.status(201).json( lista ))
        .catch( error => this.manejarError( error, res ));
    }

    public cocinar = (req: Request, res: Response) => {
        const { correo, idReceta, calorias } = req.body;
        if (!idReceta) {
            return res.status(400).json({error: 'Falta el ID de la receta'});
        }
        if (!correo) {
            return res.status(400).json({error: 'Falta el correo'});
        }
        if (!calorias) {
            return res.status(400).json({error: 'Faltan las calorias'});
        }
        this.recetaService.cocinar( correo, idReceta, calorias )
        .then( cocinar => res.status(201).json( cocinar ))
        .catch( error => this.manejarError( error, res ));
    }
}