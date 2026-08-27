import { describe, it, expect } from "vitest";
import { validarLivro } from "./validacao";

describe("validarLivro", () => {
  it("aceita título e ano válidos", () => {
    expect(validarLivro("Dom Casmurro", 1899)).toEqual({ valido: true });
  });

  it("rejeita título vazio", () => {
    expect(validarLivro("", 1899)).toEqual({
      valido: false,
      erro: "titulo é obrigatório",
    });
  });

  it("rejeita ano que não é número inteiro", () => {
    expect(validarLivro("Dom Casmurro", "1899")).toEqual({
      valido: false,
      erro: "ano precisa ser um número inteiro",
    });
  });
});
