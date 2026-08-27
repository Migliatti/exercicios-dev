type ResultadoValidacao = { valido: true } | { valido: false; erro: string };

export function validarLivro(titulo: unknown, ano: unknown): ResultadoValidacao {
  if (typeof titulo !== "string" || titulo.trim() === "") {
    return { valido: false, erro: "titulo é obrigatório" };
  }
  if (typeof ano !== "number" || !Number.isInteger(ano)) {
    return { valido: false, erro: "ano precisa ser um número inteiro" };
  }
  return { valido: true };
}
