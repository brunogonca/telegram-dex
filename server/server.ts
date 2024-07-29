import express, { Application } from "express";
import routes from "@server/routes";
import dotenv from "dotenv";

dotenv.config();

// Configuração de middleware
const app: Application = express();
app.use(express.json());
app.use("/", routes);

// Definição da porta e inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
