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
exports.RecetaService = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class RecetaService {
    constructor() { }
    ;
    generarRecetas(ingredientesRecetaDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const correoExiste = yield postgres_1.prisma.usuario.findFirst({
                where: { correo: ingredientesRecetaDto.correo }
            });
            if (!correoExiste)
                throw domain_1.ErrorCustomizado.badRequest('El correo no existe');
            try {
                const recetas = yield postgres_1.prisma.$queryRaw `select idReceta
                            from Receta 
                            where not exists (
                                select idIngrediente 
                                from haberIngrediente 
                                where haberIngrediente.idReceta = Receta.idReceta 
                                and idIngrediente not in (
                                    select Ingrediente.idIngrediente 
                                    from Ingrediente 
                                    inner join tenerIngrediente on Ingrediente.idIngrediente = tenerIngrediente.idIngrediente 
                                    where correo = ${ingredientesRecetaDto.correo}
                                )
                            )`;
                return { recetas: recetas };
            }
            catch (error) {
                throw domain_1.ErrorCustomizado.internalServer(`${error}`);
            }
        });
    }
    marcarFavorita(idReceta, correo) {
        return __awaiter(this, void 0, void 0, function* () {
            const correoExiste = yield postgres_1.prisma.usuario.findFirst({
                where: { correo: correo }
            });
            if (!correoExiste)
                throw domain_1.ErrorCustomizado.badRequest('El usuario no existe');
            const recetaExiste = yield postgres_1.prisma.receta.findFirst({
                where: { idreceta: idReceta }
            });
            if (!recetaExiste)
                throw domain_1.ErrorCustomizado.badRequest('La receta no existe');
            try {
                const favorita = yield postgres_1.prisma.preferir.create({
                    data: {
                        idreceta: idReceta,
                        correo: correo
                    }
                });
                return {
                    correo: favorita.correo,
                    idreceta: favorita.idreceta
                };
            }
            catch (error) {
                throw domain_1.ErrorCustomizado.internalServer(`${error}`);
            }
        });
    }
    datosReceta(datosReceta) {
        return __awaiter(this, void 0, void 0, function* () {
            const recetaExiste = yield postgres_1.prisma.receta.findFirst({
                where: { idreceta: datosReceta.idReceta }
            });
            if (!recetaExiste)
                throw domain_1.ErrorCustomizado.badRequest('No existe la receta');
            try {
                const receta = yield postgres_1.prisma.receta.findUnique({
                    where: { idreceta: datosReceta.idReceta }
                });
                return {
                    nombre: receta === null || receta === void 0 ? void 0 : receta.nombre,
                    tiempo: receta === null || receta === void 0 ? void 0 : receta.tiempo,
                    proceso: receta === null || receta === void 0 ? void 0 : receta.proceso
                };
            }
            catch (error) {
                throw domain_1.ErrorCustomizado.internalServer(`${error}`);
            }
        });
    }
}
exports.RecetaService = RecetaService;
