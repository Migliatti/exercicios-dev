import { describe, it, expect, afterAll } from "vitest";
import request from "supertest";
import { app, pool } from "./app";

describe("GET /livros", () => {
  // TODO: use supertest (`request(app).get("/livros")`) para chamar a rota
  // e verifique que o status é 200 e que o corpo é um array
  // (dica: `Array.isArray(resposta.body)`).

  afterAll(async () => {
    await pool.end();
  });
});
