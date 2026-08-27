exports.up = (pgm) => {
  pgm.createTable("livros", {
    id: "id",
    titulo: { type: "text", notNull: true },
    autor: { type: "text", notNull: true },
    ano: { type: "integer", notNull: true },
    disponivel: { type: "boolean", notNull: true, default: true },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("livros");
};
