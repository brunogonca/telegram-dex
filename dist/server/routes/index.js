"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Definindo uma rota de exemplo
router.get("/", (req, res) => {
    res.send("Bem-vindo ao servidor Express.js!");
});
exports.default = router;
