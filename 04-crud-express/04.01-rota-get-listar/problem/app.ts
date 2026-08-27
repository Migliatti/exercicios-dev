import "dotenv/config";
import express from "express";
import { Pool } from "pg";

const app = express();
app.use(express.json());

const pool = new Pool();

// TODO: crie uma rota GET /livros que busca todas as linhas da tabela "livros"
// (ordenadas por id) e devolve como JSON.

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
});
