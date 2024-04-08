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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredienteService = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class IngredienteService {
    constructor() { }
    agregarIngrediente(manipularIngredienteDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredienteExiste = yield postgres_1.prisma.ingrediente.findFirst({
                where: { idingrediente: manipularIngredienteDto.idIngrediente }
            });
            if (!ingredienteExiste)
                throw domain_1.ErrorCustomizado.badRequest('Ingrediente no existe');
            const usuarioExiste = yield postgres_1.prisma.usuario.findFirst({
                where: { correo: user.correo }
            });
            if (!usuarioExiste)
                throw domain_1.ErrorCustomizado.badRequest('El usuario no existe');
            try {
                const ingrediente = yield postgres_1.prisma.teneringrediente.create({
                    data: {
                        idingrediente: +manipularIngredienteDto.idIngrediente,
                        correo: user.correo,
                        cantidad: manipularIngredienteDto.cantidad
                    }
                });
                return {
                    idingrediente: ingrediente.idingrediente,
                    correo: ingrediente.correo,
                    cantidad: ingrediente.cantidad,
                    fechaAgrego: ingrediente.fecha,
                    fechacaducidad: ingrediente.fechacaducidad
                };
            }
            catch (error) {
                throw domain_1.ErrorCustomizado.internalServer(`${error}`);
            }
        });
    }
    obtenerIngredientesUsuario(ingredientesRecetaDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioExiste = yield postgres_1.prisma.usuario.findFirst({
                where: { correo: ingredientesRecetaDto.correo }
            });
            if (!usuarioExiste)
                throw domain_1.ErrorCustomizado.badRequest('El usuario no existe');
            try {
                const ingredientesUsuario = yield postgres_1.prisma.teneringrediente.findMany({
                    include: {
                        ingrediente: true
                    },
                    where: { correo: ingredientesRecetaDto.correo }
                });
                let ingredientes = [];
                ingredientesUsuario.map((ingrediente) => ingredientes.push(domain_1.IngredienteUsuario.crearInstancia(ingrediente)));
                return {
                    ingredientes: ingredientes
                };
            }
            catch (error) {
                throw domain_1.ErrorCustomizado.internalServer(`${error}`);
            }
        });
    }
    buscarIngrediente(ingrediente) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ingredientes = yield postgres_1.prisma.ingrediente.findMany({
                    take: 10,
                    where: {
                        nombre: {
                            startsWith: `${ingrediente}_`,
                            mode: 'insensitive'
                        }
                    }
                });
                if (ingredientes.length === 0) {
                    return { ingredientes: 'No hay ingredientes' };
                }
                return { ingredientes: ingredientes };
            }
            catch (error) {
                throw domain_1.ErrorCustomizado.internalServer(`${error}`);
            }
        });
    }
    eliminarIngrediente(manipularIngredienteDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredienteExiste = yield postgres_1.prisma.ingrediente.findFirst({
                where: { idingrediente: manipularIngredienteDto.idIngrediente }
            });
            if (!ingredienteExiste)
                throw domain_1.ErrorCustomizado.badRequest('Ingrediente no existe');
            const usuarioExiste = yield postgres_1.prisma.usuario.findFirst({
                where: { correo: user.correo }
            });
            if (!usuarioExiste)
                throw domain_1.ErrorCustomizado.badRequest('El usuario no existe');
            try {
                const ingrediente = yield postgres_1.prisma.teneringrediente.delete({
                    where: {
                        tenerId: {
                            correo: user.correo,
                            idingrediente: manipularIngredienteDto.idIngrediente
                        }
                    }
                });
                return {
                    idingrediente: ingrediente.idingrediente,
                    correo: ingrediente.correo,
                    cantidad: ingrediente.cantidad,
                    fechaAgrego: ingrediente.fecha,
                    fechacaducidad: ingrediente.fechacaducidad
                };
            }
            catch (error) {
                throw domain_1.ErrorCustomizado.internalServer(`${error}`);
            }
        });
    }
    editarIngrediente(manipularIngredienteDto, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredienteExiste = yield postgres_1.prisma.ingrediente.findFirst({
                where: { idingrediente: manipularIngredienteDto.idIngrediente }
            });
            if (!ingredienteExiste)
                throw domain_1.ErrorCustomizado.badRequest('Ingrediente no existe');
            const usuarioExiste = yield postgres_1.prisma.usuario.findFirst({
                where: { correo: user.correo }
            });
            if (!usuarioExiste)
                throw domain_1.ErrorCustomizado.badRequest('El usuario no existe');
            try {
                const ingrediente = yield postgres_1.prisma.teneringrediente.update({
                    where: {
                        tenerId: {
                            correo: user.correo,
                            idingrediente: manipularIngredienteDto.idIngrediente
                        }
                    },
                    data: {
                        cantidad: manipularIngredienteDto.cantidad
                    }
                });
                return {
                    idingrediente: ingrediente.idingrediente,
                    correo: ingrediente.correo,
                    cantidad: ingrediente.cantidad,
                    fechaAgrego: ingrediente.fecha,
                    fechacaducidad: ingrediente.fechacaducidad
                };
            }
            catch (error) {
                throw domain_1.ErrorCustomizado.internalServer(`${error}`);
            }
        });
    }
}
exports.IngredienteService = IngredienteService;
