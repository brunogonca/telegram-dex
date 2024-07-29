import express, { Application } from "express";
import path from "path";
import routes from "@server/routes";
import dotenv from "dotenv";

dotenv.config();

// Configuração de middleware
const app: Application = express();
app.use(express.json());
app.use("/", routes);

// Caminho para os arquivos estáticos do front-end
const frontendPath = path.join(__dirname, "../../frontend/build");
app.use(express.static(frontendPath));

// Rota para servir o index.html do front-end
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Definição da porta e inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
