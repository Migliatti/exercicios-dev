import { describe, it, expect, afterAll } from "vitest";
import request from "supertest";
import { app, pool } from "./app";

describe("POST /livros - casos de erro", () => {
  // TODO: teste que enviar POST /livros sem "titulo" (só { ano: 1899 })
  // devolve status 400 e corpo { erro: "titulo é obrigatório" }.

  afterAll(async () => {
    await pool.end();
  });
});
