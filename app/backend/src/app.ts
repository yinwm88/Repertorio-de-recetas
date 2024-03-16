import { envs } from "./config";
import { prisma } from "./data/postgres";
import { Server, Routes } from "./presentation";

(async() => {
    main();
})();

async function main() {
    try {
        await prisma.$connect();
    } catch (error) {
        console.log(error);
    }

    const server = new Server({
        puerto: envs.PORT,
        rutas: Routes.rutas
    });

    server.iniciar();
}