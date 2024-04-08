"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorIngrediente = void 0;
const domain_1 = require("../../domain");
class ControladorIngrediente {
    constructor(ingredienteService) {
        this.ingredienteService = ingredienteService;
        this.manejarError = (error, res) => {
            if (error instanceof domain_1.ErrorCustomizado) {
                return res.status(error.codigoEstatus).json({ error: error.mensaje });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.agregarIngrediente = (req, res) => {
            const [error, manipularIngredienteDto] = domain_1.ManipularIngredienteDto.crearInstancia(req.body);
            if (error) {
                return res.status(400).json(error);
            }
            this.ingredienteService.agregarIngrediente(manipularIngredienteDto, req.body.usuario)
                .then(ingrediente => res.status(201).json(ingrediente))
                .catch(error => this.manejarError(error, res));
        };
        this.editarIngrediente = (req, res) => {
            const [error, manipularIngredienteDto] = domain_1.ManipularIngredienteDto.crearInstancia(req.body);
            if (error) {
                return res.status(400).json(error);
            }
            this.ingredienteService.editarIngrediente(manipularIngredienteDto, req.body.usuario)
                .then(ingrediente => res.status(201).json(ingrediente))
                .catch(error => this.manejarError(error, res));
        };
        this.eliminarIngrediente = (req, res) => {
            const [error, manipularIngredienteDto] = domain_1.ManipularIngredienteDto.crearInstancia(req.body);
            if (error) {
                return res.status(400).json(error);
            }
            this.ingredienteService.eliminarIngrediente(manipularIngredienteDto, req.body.usuario)
                .then(ingrediente => res.status(200).json(ingrediente))
                .catch(error => this.manejarError(error, res));
        };
        this.buscarIngrediente = (req, res) => {
            const { ingrediente } = req.body;
            if (!ingrediente) {
                return res.status(400).json('Hace falta el ingrediente');
            }
            this.ingredienteService.buscarIngrediente(req.body.ingrediente)
                .then(ingredientes => res.status(200).json(ingredientes))
                .catch(error => this.manejarError(error, res));
        };
    }
}
exports.ControladorIngrediente = ControladorIngrediente;
