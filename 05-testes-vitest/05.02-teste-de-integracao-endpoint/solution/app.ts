import "dotenv/config";
import express from "express";
import { Pool } from "pg";

export const pool = new Pool();

export const app = express();
app.use(express.json());

app.get("/livros", async (req, res) => {
  const resultado = await pool.query("SELECT * FROM livros ORDER BY id");
  res.json(resultado.rows);
});
