"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorRecetas = void 0;
const domain_1 = require("../../domain");
class ControladorRecetas {
    constructor(recetaService) {
        this.recetaService = recetaService;
        this.manejarError = (error, res) => {
            if (error instanceof domain_1.ErrorCustomizado) {
                return res.status(error.codigoEstatus).json({ error: error.mensaje });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.marcarFavorita = (req, res) => {
            const { idReceta, correo } = req.body;
            if (!idReceta) {
                return res.status(400).json('Falta el id de la receta');
            }
            if (!correo) {
                return res.status(400).json('Falta el correo');
            }
            this.recetaService.marcarFavorita(idReceta, correo)
                .then(receta => res.status(201).json(receta))
                .catch(error => this.manejarError(error, res));
        };
        this.datosReceta = (req, res) => {
            const [error, recetaDto] = domain_1.RecetaDto.crearInstancia(req.body);
            if (error) {
                return res.status(400).json(error);
            }
            this.recetaService.datosReceta(recetaDto)
                .then(datos => res.status(200).json(datos))
                .catch(error => this.manejarError(error, res));
        };
    }
}
exports.ControladorRecetas = ControladorRecetas;
