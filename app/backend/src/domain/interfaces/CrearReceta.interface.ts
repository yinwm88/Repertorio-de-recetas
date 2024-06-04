import { CrearRecetaDto, RecetaIngredientesDto, RecetaUtensiliosDto } from "../dtos";
import { EntidadUsuario } from "../entities/usuario.entidad";

export interface CrearReceta {
    datosReceta: CrearRecetaDto,
    usuario: EntidadUsuario,
    ingredientes: RecetaIngredientesDto,
    utensilios: RecetaUtensiliosDto,
    imagen: string,
}