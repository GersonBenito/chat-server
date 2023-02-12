"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./class/server"));
const router_1 = __importDefault(require("./routes/router"));
const server = server_1.default.instance;
server.app.use('/server', router_1.default);
server.start(() => console.log(`Servidor corriendo en el puerto ${server.port}`));
