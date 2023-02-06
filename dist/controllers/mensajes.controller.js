"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.getMessage = void 0;
const getMessage = (req, res) => {
    return res.status(200).json({
        code: 200,
        message: 'Todo esta bien!'
    });
};
exports.getMessage = getMessage;
const sendMessage = (req, res) => {
    const { cuerpo, de } = req.body;
    const id = req.params.id;
    return res.status(200).json({
        code: 200,
        id,
        cuerpo,
        de
    });
};
exports.sendMessage = sendMessage;
