"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorUsuario = void 0;
const domain_1 = require("../../domain");
class ControladorUsuario {
    constructor() {
        this.manejarError = (error, res) => {
            if (error instanceof domain_1.ErrorCustomizado) {
                return res.status(error.codigoEstatus).json({ error: error.mensaje });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
    }
}
exports.ControladorUsuario = ControladorUsuario;
