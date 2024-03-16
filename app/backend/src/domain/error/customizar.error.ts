

export class ErrorCustomizado extends Error {

    constructor(
        public readonly codigoEstatus: number,
        public readonly mensaje: string
    ) {
        super(mensaje);
    }

    public static badRequest( mensaje: string ): ErrorCustomizado {
        return new ErrorCustomizado(400, mensaje);
    }
    
    public static noAutorizado( mensaje: string ): ErrorCustomizado {
        return new ErrorCustomizado(401, mensaje);
    }
    
    public static noEncontrado( mensaje: string ): ErrorCustomizado {
        return new ErrorCustomizado(404, mensaje);
    }
    
    public static internalServer( mensaje: string ): ErrorCustomizado {
        return new ErrorCustomizado(500, mensaje);
    }
    
}