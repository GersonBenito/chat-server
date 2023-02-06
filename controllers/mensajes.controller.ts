import { Request, Response } from 'express';

export const getMessage = (req: Request, res: Response) =>{
    return res.status(200).json({
        code: 200,
        message: 'Todo esta bien!'
    });
}

export const sendMessage = (req: Request, res: Response) =>{
    const { cuerpo, de } = req.body;
    const id = req.params.id;
    
    return res.status(200).json({
        code: 200,
        id,
        cuerpo,
        de
    });
}