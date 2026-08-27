const livros = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, disponivel: true },
  { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, disponivel: false },
  { titulo: "1984", autor: "George Orwell", ano: 1949, disponivel: true },
];

const disponiveis = livros.filter((livro) => livro.disponivel);
for (const livro of disponiveis) {
  console.log(livro.titulo);
}

const livroEncontrado = livros.find((livro) => livro.titulo === "1984");
console.log(livroEncontrado?.autor);
