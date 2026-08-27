import "dotenv/config";
import express from "express";
import { Pool } from "pg";

const app = express();
app.use(express.json());

const pool = new Pool();

app.get("/livros", async (req, res) => {
  const resultado = await pool.query("SELECT * FROM livros ORDER BY id");
  res.json(resultado.rows);
});

app.post("/livros", async (req, res) => {
  const { titulo, autor, ano } = req.body;

  const resultado = await pool.query(
    "INSERT INTO livros (titulo, autor, ano, disponivel) VALUES ($1, $2, $3, true) RETURNING *",
    [titulo, autor, ano]
  );
  res.status(201).json(resultado.rows[0]);
});

// TODO 1: crie uma rota PUT /livros/:id que atualiza titulo, autor, ano e disponivel
// e devolve a linha atualizada. Se não achar o id, devolva status 404.

// TODO 2: crie uma rota DELETE /livros/:id que apaga a linha.
// Se apagou, devolva status 204 sem corpo. Se não achou o id, devolva 404.

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
});
