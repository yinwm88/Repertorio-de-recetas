import { Router } from "express";

export class RutasUsuario {

    static get rutas(): Router {        
        
        const router = Router();
        // TODO: Agregar utensilio al usuario
        router.put('utensilio/:id/active', );
        // TODO: Quitar utensilio al usuario
        router.delete('utensilio/:id', );
        // TODO: Rutas para las funciones del usuario: cambiar contraseña, peso, talla, etc.

        return router;
    }
}