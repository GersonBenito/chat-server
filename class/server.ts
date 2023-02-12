import express from 'express';
import cors from 'cors';
import socketIO from 'socket.io';
import http from 'http';
import { SERVER_PORT } from '../global/environment';

export default class ServerSocket {

    private static _instance: ServerSocket;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor(){
        this.app = express();
        // configs middleware
        
        this.port = SERVER_PORT;
        
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        
        this.app.use(cors({ origin: true, credentials: true }));
        
        this.httpServer = new http.Server( this.app );
        this.io = socketIO( this.httpServer );

        this.escucharSockets()
    }

    public static get instance(){
        return this._instance || ( this._instance = new this() );
    }

    private escucharSockets(): void {

        this.io.on('connection', client => {
            console.log('cliente conectado');
            
        });
        
    }

    start( callback: () => void ){
        this.httpServer.listen( this.port, callback );
    }

}