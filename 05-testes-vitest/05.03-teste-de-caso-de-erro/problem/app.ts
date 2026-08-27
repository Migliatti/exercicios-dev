import "dotenv/config";
import express from "express";
import { Pool } from "pg";

export const pool = new Pool();
export const app = express();
app.use(express.json());

app.post("/livros", async (req, res) => {
  const { titulo, autor, ano } = req.body;

  if (typeof titulo !== "string" || titulo.trim() === "") {
    res.status(400).json({ erro: "titulo é obrigatório" });
    return;
  }
  if (typeof ano !== "number" || !Number.isInteger(ano)) {
    res.status(400).json({ erro: "ano precisa ser um número inteiro" });
    return;
  }

  const resultado = await pool.query(
    "INSERT INTO livros (titulo, autor, ano, disponivel) VALUES ($1, $2, $3, true) RETURNING *",
    [titulo, autor, ano]
  );
  res.status(201).json(resultado.rows[0]);
});
