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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const config_1 = require("../../config");
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class UsuarioService {
    constructor() { }
    ingresarUsuario(ingresarUsuarioDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield postgres_1.prisma.usuario.findUnique({
                where: { correo: ingresarUsuarioDto.correo }
            });
            if (!usuario)
                throw domain_1.ErrorCustomizado.badRequest('El correo no existe');
            const hash = usuario.contrasena;
            const salt = usuario.salt;
            if (!config_1.Crypto.compararContrasena(ingresarUsuarioDto.contrasena, hash, salt)) {
                throw domain_1.ErrorCustomizado.badRequest('Contraseña incorrecta');
            }
            const _a = domain_1.EntidadUsuario.crearInstancia(usuario), { contrasena } = _a, user = __rest(_a, ["contrasena"]);
            return {
                usuario: user,
                token: 'Token'
            };
        });
    }
    registrarUsuario(registrarUsuarioDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield postgres_1.prisma.usuario.findUnique({
                where: { correo: registrarUsuarioDto.correo }
            });
            if (usuario)
                throw domain_1.ErrorCustomizado.badRequest('El correo ya existe');
            try {
                const [hash, salt] = config_1.Crypto.crearHash(registrarUsuarioDto.contrasena);
                // const  hash  = 'hola';
                const usuarioNuevo = yield postgres_1.prisma.usuario.create({
                    data: {
                        correo: registrarUsuarioDto.correo,
                        nombre: registrarUsuarioDto.nombre,
                        apellido: registrarUsuarioDto.apellido,
                        contrasena: hash,
                        salt: salt
                    }
                });
                const _a = domain_1.EntidadUsuario.crearInstancia(usuarioNuevo), { contrasena } = _a, usuario = __rest(_a, ["contrasena"]);
                return {
                    usuario: usuario,
                    token: 'Token'
                };
            }
            catch (error) {
                throw domain_1.ErrorCustomizado.internalServer(`${error}`);
            }
        });
    }
}
exports.UsuarioService = UsuarioService;
