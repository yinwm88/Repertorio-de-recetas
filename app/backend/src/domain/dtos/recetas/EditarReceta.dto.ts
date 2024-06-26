import { Ingrediente } from "../../interfaces/Ingrediente.interface";
import { Utensilio } from "../../interfaces/Utensilio.interface";

export class EditarRecetaDto {

    private constructor(
        public readonly idReceta: number,
        public readonly nombre: string,
        public readonly tiempo: number,
        public readonly proceso: string,
        public readonly ingredientes: Ingrediente[],
        public readonly utensilios: Utensilio[],
        public readonly imagen?: string
    ){}

    static crearInstancia( objeto: { [key: string]: any }): [string?, EditarRecetaDto?] {
        const { idReceta, nombre, tiempo, proceso, imagen, ingredientes, utensilios } = objeto;
        let imagenOpcional = imagen;
        if ( !idReceta ) return ['Falta el id de la receta'];   
        if ( !nombre ) return ['Falta el nombre de la receta'];   
        if ( !tiempo ) return ['Falta el tiempo de la receta'];     
        if ( !proceso ) return ['Falta el proceso de la receta'];     
        if ( !imagen ) imagenOpcional = '';
        if ( !ingredientes ) return ['Faltan los ingredientes de la receta'];     
        if ( +tiempo < 0 ) return ['El tiempo debe de ser positivo'];     
        
        return [, new EditarRecetaDto( +idReceta, nombre, +tiempo, proceso, ingredientes, utensilios, imagenOpcional )];
    }

}