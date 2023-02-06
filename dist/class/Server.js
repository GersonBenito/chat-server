"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const environment_1 = require("../global/environment");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = environment_1.SERVER_PORT;
        // configs middleware
        this.app.use((0, cors_1.default)({ origin: true, credentials: true }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
