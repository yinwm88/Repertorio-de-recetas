"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorInicio = void 0;
const domain_1 = require("../../domain");
class ControladorInicio {
    constructor(ingredienteService, recetaService) {
        this.ingredienteService = ingredienteService;
        this.recetaService = recetaService;
        this.manejarError = (error, res) => {
            if (error instanceof domain_1.ErrorCustomizado) {
                return res.status(error.codigoEstatus).json({ error: error.mensaje });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.obtenerIngredientesUsuario = (req, res) => {
            const [error, ingredientesRecetasDto] = domain_1.IngredientesRecetasDto.crearInstancia(req.body);
            if (error) {
                return res.status(400).json(error);
            }
            this.ingredienteService.obtenerIngredientesUsuario(ingredientesRecetasDto)
                .then(ingredientes => res.status(200).json(ingredientes))
                .catch(error => this.manejarError(error, res));
        };
        this.generarRecetas = (req, res) => {
            const [error, ingredientesRecetasDto] = domain_1.IngredientesRecetasDto.crearInstancia(req.body);
            if (error) {
                return res.status(400).json(error);
            }
            this.recetaService.generarRecetas(ingredientesRecetasDto)
                .then(recetas => res.status(201).json(recetas))
                .catch(error => this.manejarError(error, res));
        };
    }
}
exports.ControladorInicio = ControladorInicio;
