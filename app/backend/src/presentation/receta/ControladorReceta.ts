import { Request, Response } from "express";
import { ErrorCustomizado, IngresarUsuarioDto, RecetaDto, RegistrarUsuarioDto } from "../../domain";
import { UsuarioService } from "../services/usuario.service";
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
            return res.status(400).json('Falta el id de la receta');
        }
        if (!correo) {
            return res.status(400).json('Falta el correo');
        }
        this.recetaService.marcarFavorita( idReceta, correo )
        .then( receta => res.status(201).json( receta ))
        .catch( error => this.manejarError( error, res ));
    }


    public datosReceta = ( req:Request, res: Response ) => {
         const [error, recetaDto] = RecetaDto.crearInstancia( req.body);
         if (error) {
            return res.status(400).json(error);
        }

        this.recetaService.datosReceta( recetaDto! )
        .then( datos => res.status(200).json( datos ))
        .catch( error => this.manejarError( error, res ));
    }

    public crearReceta = ( req:Request, res: Response ) => {
        const [error, recetaDto] = RecetaDto.crearInstancia( req.body );
        if (error) {
           return res.status(400).json(error);
       }

       this.recetaService.crearReceta( recetaDto!, req.body.usuario )
       .then( datos => res.status(200).json( datos ))
       .catch( error => this.manejarError( error, res ));
   }
}