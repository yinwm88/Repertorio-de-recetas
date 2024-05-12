import { Ingrediente } from "../../interfaces/Ingrediente.interface";
import { Utensilio } from "../../interfaces/Utensilio.interface";

export class CrearRecetaDto {

    private constructor(
        public readonly nombre: string,
        public readonly tiempo: number,
        public readonly proceso: string,
        public readonly ingredientes: Ingrediente[],
        public readonly utensilios: Utensilio[],
        public readonly imagen?: string
    ){}

    static crearInstancia( objeto: { [key: string]: any }): [string?, CrearRecetaDto?] {
        const { nombre, tiempo, proceso, ingredientes, imagen, utensilios } = objeto;
        let imagenOpcional = imagen;

        if (!nombre) return ['Falta el nombre de la receta'];   
        if (!tiempo) return ['Falta el tiempo de la receta'];     
        if (!proceso) return ['Falta el proceso de la receta'];     
        if ( !ingredientes ) return ['Faltan los ingredientes de la receta'];     
        if ( !imagen ) imagenOpcional = '';
        if ( !utensilios ) return ['Faltan los utensilios de la receta'];     
        if ( +tiempo < 0 ) return ['El tiempo debe de ser positivo'];     
           
        return [, new CrearRecetaDto( nombre, +tiempo, proceso, ingredientes, utensilios, imagenOpcional )];
    }
}