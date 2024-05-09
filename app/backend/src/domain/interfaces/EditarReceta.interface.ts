import { EditarRecetaDto, RecetaIngredientesDto, RecetaUtensiliosDto } from "../dtos";
import { EntidadUsuario } from "../entities/usuario.entidad";

export interface EditarReceta {
    datosReceta: EditarRecetaDto,
    usuario: EntidadUsuario,
    ingredientes: RecetaIngredientesDto,
    utensilios: RecetaUtensiliosDto
}