import { Router } from 'express';
import routerMensaje from './mensajes.router';

const router = Router();

router.use('/mensajes', routerMensaje)

export default router;