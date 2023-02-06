import Server from './class/server';
import router from './routes/router';


const server = new Server();

server.app.use('/server', router);

server.start(() => console.log(`Servidor corriendo en el puerto ${server.port}`));
