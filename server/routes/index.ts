import { Router, Request, Response } from "express";

const router: Router = Router();

// Definindo uma rota de exemplo
router.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo ao servidor Express.js!");
});

export default router;
