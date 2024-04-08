"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorJoin = void 0;
const domain_1 = require("../../domain");
class ControladorJoin {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.manejarError = (error, res) => {
            if (error instanceof domain_1.ErrorCustomizado) {
                return res.status(error.codigoEstatus).json({ error: error.mensaje });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.ingresarUsuario = (req, res) => {
            const [error, ingresarUsuarioDto] = domain_1.IngresarUsuarioDto.crearInstancia(req.body);
            if (error) {
                return res.status(400).json(error);
            }
            this.usuarioService.ingresarUsuario(ingresarUsuarioDto)
                .then(usuario => res.status(200).json(usuario))
                .catch(error => this.manejarError(error, res));
        };
        this.registrarUsuario = (req, res) => {
            const [error, registrarUsuarioDto] = domain_1.RegistrarUsuarioDto.crearInstancia(req.body);
            if (error) {
                return res.status(400).json(error);
            }
            this.usuarioService.registrarUsuario(registrarUsuarioDto)
                .then(usuario => res.status(201).json(usuario))
                .catch(error => this.manejarError(error, res));
        };
    }
}
exports.ControladorJoin = ControladorJoin;
