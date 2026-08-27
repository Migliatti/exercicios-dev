import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool();

async function main() {
  // TODO: rode "SELECT COUNT(*) FROM livros" usando pool.query
  // e imprima o resultado no console.

  await pool.end();
}

main();
