import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool();

async function main() {
  const resultado = await pool.query("SELECT COUNT(*) FROM livros");
  console.log(resultado.rows[0]);

  await pool.end();
}

main();
