exports.up = (pgm) => {
  // TODO: crie a tabela "emprestimos" com:
  // id (serial, primary key), livro_id (integer, obrigatório, referencia livros.id,
  // onDelete CASCADE), pessoa (text, obrigatório), data_emprestimo (date, obrigatório),
  // data_devolucao (date, pode ser nula)
};

exports.down = (pgm) => {
  // TODO: desfaça a criação da tabela
};
