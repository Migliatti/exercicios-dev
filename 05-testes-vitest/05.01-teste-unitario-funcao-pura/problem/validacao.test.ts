import { describe, it, expect } from "vitest";
import { validarLivro } from "./validacao";

describe("validarLivro", () => {
  // TODO 1: teste que validarLivro("Dom Casmurro", 1899) devolve { valido: true }

  // TODO 2: teste que validarLivro("", 1899) devolve
  // { valido: false, erro: "titulo é obrigatório" }

  // TODO 3: teste que validarLivro("Dom Casmurro", "1899") devolve
  // { valido: false, erro: "ano precisa ser um número inteiro" }
});
