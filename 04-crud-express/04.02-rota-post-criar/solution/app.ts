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

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
});
