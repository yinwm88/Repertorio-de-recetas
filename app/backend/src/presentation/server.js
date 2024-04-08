"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors")); // Importa el paquete CORS
class Server {
    constructor(opciones) {
        this.app = (0, express_1.default)();
        const { puerto, rutas, rutaPublica = 'public' } = opciones;
        this.puerto = puerto;
        this.rutas = rutas;
        this.rutaPublica = rutaPublica;
    }
    iniciar() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use((req, res, next) => {
                const now = new Date().toISOString();
                console.log(`${now}: ${req.method} ${req.originalUrl}`);
                next(); // Asegúrate de llamar a next() para que la solicitud continúe a través de los siguientes middlewares o rutas.
            });
            this.app.use((0, cors_1.default)());
            //* Middlewares
            this.app.use(express_1.default.json()); // raw
            this.app.use(express_1.default.urlencoded({ extended: true })); // x-www-form-urlencoded
            this.app.use(express_1.default.static(this.rutaPublica));
            this.app.use(this.rutas);
            this.app.get('*', (req, res) => {
                const indiceRuta = path_1.default.join(__dirname + `../../../${this.rutaPublica}/index.html`);
                res.send(indiceRuta);
            });
            this.serverListener = this.app.listen(this.puerto, () => {
                console.log(`Servidor corriendo en el puerto: ${this.puerto}`);
            });
        });
    }
    cerrar() {
        var _a;
        (_a = this.serverListener) === null || _a === void 0 ? void 0 : _a.close();
    }
}
exports.Server = Server;
