SELECT livros.titulo, emprestimos.pessoa
FROM emprestimos
JOIN livros ON livros.id = emprestimos.livro_id
WHERE emprestimos.data_devolucao IS NULL;
