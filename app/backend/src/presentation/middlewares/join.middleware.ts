import { error } from "console";
import { NextFunction, Request, Response } from "express";
import { GestorJwt } from "../../config";
import { prisma } from "../../data/postgres";
import { EntidadUsuario } from "../../domain";

export class JoinMiddleware {
    
    static async validarJwt( req:Request, res: Response, next: NextFunction ) {
        const autorizacion = req.header('Authorization');
        if ( !autorizacion ) return res.status(401).json({ error: "No agrego el token"});
        if ( !autorizacion.startsWith('Bearer ') ) return res.status(401).json({ error: "Bearer Token invalido"});

        const token: string = autorizacion.split(' ').at(1) || '';

        try {
            const payload = await GestorJwt.validarToken<{ correo: string }>( token );
            if ( !payload ) return res.status(401).json({ error: "Token invalido"});
            
            const usuario = await prisma.usuario.findUnique({
                where: { correo: payload.correo }
            });
            if ( !usuario ) return res.status(401).json({ error: "Token invalido"});

            req.body.usuario = EntidadUsuario.crearInstancia( usuario );

            next();
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Error interno"});
        }

    }
}