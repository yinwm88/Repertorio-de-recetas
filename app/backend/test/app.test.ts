import { envs } from '../src/config';
import { Server } from '../src/presentation/server';

jest.mock('../src/presentation/server');

describe('Test App.ts', () => {

    test('Llamar server con argumentos', async() => {
        await import('../src/app');
        
        expect(Server).toHaveBeenCalledTimes(1);
        expect(Server).toHaveBeenCalledWith({
            puerto: envs.PORT,
            rutas: expect.any(Function)
        });
        
        expect(Server.prototype.iniciar).toHaveBeenCalledTimes(1);
    });
    
});