"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const environment_1 = require("../global/environment");
class ServerSocket {
    constructor() {
        this.app = (0, express_1.default)();
        // configs middleware
        this.port = environment_1.SERVER_PORT;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)({ origin: true, credentials: true }));
        this.httpServer = new http_1.default.Server(this.app);
        this.io = (0, socket_io_1.default)(this.httpServer);
        this.escucharSockets();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    escucharSockets() {
        this.io.on('connection', client => {
            console.log('cliente conectado');
        });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = ServerSocket;
