import { envs } from './config';
import { Server, Routes } from './presentation';

(async() => {
    main();
})();

async function main() {
    const server = new Server({
        puerto: envs.PORT,
        rutas: Routes.rutas
    });
    server.iniciar();
}