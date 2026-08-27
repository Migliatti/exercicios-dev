function formatarLivro(titulo: string, ano: number) {
  return `${titulo} (${ano})`;
}

function situacaoDoLivro(disponivel: boolean) {
  return disponivel ? "disponível" : "emprestado";
}

console.log(formatarLivro("O Hobbit", 1937));
console.log(situacaoDoLivro(true));
console.log(situacaoDoLivro(false));
