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

app.put("/livros/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, disponivel } = req.body;

  const resultado = await pool.query(
    "UPDATE livros SET titulo = $1, autor = $2, ano = $3, disponivel = $4 WHERE id = $5 RETURNING *",
    [titulo, autor, ano, disponivel, id]
  );

  if (resultado.rows.length === 0) {
    res.status(404).json({ erro: "livro não encontrado" });
    return;
  }
  res.json(resultado.rows[0]);
});

app.delete("/livros/:id", async (req, res) => {
  const { id } = req.params;
  const resultado = await pool.query("DELETE FROM livros WHERE id = $1 RETURNING *", [id]);

  if (resultado.rows.length === 0) {
    res.status(404).json({ erro: "livro não encontrado" });
    return;
  }
  res.status(204).send();
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
});
