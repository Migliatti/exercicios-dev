// TODO 1: escreva uma função chamada formatarLivro que recebe um título (string)
// e um ano (number) e devolve uma string no formato "Titulo (Ano)".
// Não precisa anotar o tipo de retorno — deixe o TypeScript inferir.

function formatarLivro(titulo: string, ano: number) {
  // TODO: implemente aqui
}

// TODO 2: escreva uma função chamada situacaoDoLivro que recebe um boolean
// "disponivel" e devolve "disponível" se true, ou "emprestado" se false.

function situacaoDoLivro(disponivel: boolean) {
  // TODO: implemente aqui
}

console.log(formatarLivro("O Hobbit", 1937));
console.log(situacaoDoLivro(true));
console.log(situacaoDoLivro(false));
