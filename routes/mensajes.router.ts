import { Router } from 'express';
import { getMessage, sendMessage } from '../controllers/mensajes.controller';

const routerMensaje = Router();


routerMensaje.get('/', getMessage);
routerMensaje.post('/:id', sendMessage);

export default routerMensaje;