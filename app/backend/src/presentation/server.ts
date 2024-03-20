import express, { Router } from "express";
import path from "path";
import cors from "cors"; // Importa el paquete CORS

interface OpcionesServer {
    puerto:number;
    rutas: Router;
    rutaPublica?: string;
}

export class Server {

    public readonly app = express();
    private serverListener?: any;
    private readonly puerto: number;
    private readonly rutaPublica: string;
    private readonly rutas: Router;

    constructor(opciones: OpcionesServer) {
        const {puerto, rutas, rutaPublica = 'public'} = opciones;
        this.puerto = puerto;
        this.rutas = rutas;
        this.rutaPublica = rutaPublica;

        // CORS aquí
        this.configurarCORS();
    }

    private configurarCORS() {
        // Aquí se permite el acceso desde cualquier origen
        // En producción, podrías querer restringir esto a dominios específicos
        this.app.use(cors());
    }

    public async iniciar() {
        //* Middlewares
        this.app.use(express.json()); // raw
        this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

        this.app.use(express.static(this.rutaPublica));

        this.app.use(this.rutas);

        this.app.get('*', (req, res) => {
            const indiceRuta = path.join(__dirname + `../../../${this.rutaPublica}/index.html`);
            res.send(indiceRuta);
        });

        this.serverListener = this.app.listen(this.puerto, () => {
            console.log(`Servidor corriendo en el puerto: ${this.puerto}`);
        })
    }

    public cerrar() {
        this.serverListener?.close();
    }
}
