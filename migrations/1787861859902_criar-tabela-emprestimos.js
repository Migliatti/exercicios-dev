exports.up = (pgm) => {
  pgm.createTable("emprestimos", {
    id: "id",
    livro_id: {
      type: "integer",
      notNull: true,
      references: "livros",
      onDelete: "CASCADE",
    },
    pessoa: { type: "text", notNull: true },
    data_emprestimo: { type: "date", notNull: true },
    data_devolucao: { type: "date" },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("emprestimos");
};
