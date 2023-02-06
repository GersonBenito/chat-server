import express from 'express';
import cors from 'cors';
import { SERVER_PORT } from '../global/environment';

export default class Server {

    public app: express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;

        // configs middleware
        this.app.use(cors({ origin: true, credentials: true }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    start( callback: () => void ){
        this.app.listen( this.port, callback );
    }

}