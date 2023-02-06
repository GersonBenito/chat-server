"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensajes_controller_1 = require("../controllers/mensajes.controller");
const routerMensaje = (0, express_1.Router)();
routerMensaje.get('/', mensajes_controller_1.getMessage);
routerMensaje.post('/:id', mensajes_controller_1.sendMessage);
exports.default = routerMensaje;
