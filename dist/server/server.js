"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("@server/routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Configuração de middleware
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", routes_1.default);
// Caminho para os arquivos estáticos do front-end
const frontendPath = path_1.default.join(__dirname, "../../frontend/build");
app.use(express_1.default.static(frontendPath));
// Rota para servir o index.html do front-end
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(frontendPath, "index.html"));
});
// Definição da porta e inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
