exports.up = (pgm) => {
  pgm.addColumn("livros", {
    editora: { type: "text" },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn("livros", "editora");
};
