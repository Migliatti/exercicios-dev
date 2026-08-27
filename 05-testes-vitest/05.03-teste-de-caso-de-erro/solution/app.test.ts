import { describe, it, expect, afterAll } from "vitest";
import request from "supertest";
import { app, pool } from "./app";

describe("POST /livros - casos de erro", () => {
  it("rejeita criação sem titulo", async () => {
    const resposta = await request(app).post("/livros").send({ ano: 1899 });

    expect(resposta.status).toBe(400);
    expect(resposta.body).toEqual({ erro: "titulo é obrigatório" });
  });

  afterAll(async () => {
    await pool.end();
  });
});
