import ServerSocket from './class/server';
import router from './routes/router';


const server = ServerSocket.instance;

server.app.use('/server', router);

server.start(() => console.log(`Servidor corriendo en el puerto ${server.port}`));
