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

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
});
