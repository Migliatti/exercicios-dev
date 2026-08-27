import { describe, it, expect, afterAll } from "vitest";
import request from "supertest";
import { app, pool } from "./app";

describe("GET /livros", () => {
  it("devolve 200 e uma lista de livros", async () => {
    const resposta = await request(app).get("/livros");

    expect(resposta.status).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });

  afterAll(async () => {
    await pool.end();
  });
});
