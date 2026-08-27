DROP TABLE IF EXISTS emprestimos;
DROP TABLE IF EXISTS livros;

CREATE TABLE livros (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  autor TEXT NOT NULL,
  ano INTEGER NOT NULL,
  disponivel BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE emprestimos (
  id SERIAL PRIMARY KEY,
  livro_id INTEGER NOT NULL REFERENCES livros(id),
  pessoa TEXT NOT NULL,
  data_emprestimo DATE NOT NULL,
  data_devolucao DATE
);

INSERT INTO livros (titulo, autor, ano, disponivel) VALUES
  ('Dom Casmurro', 'Machado de Assis', 1899, true),
  ('O Hobbit', 'J.R.R. Tolkien', 1937, false),
  ('1984', 'George Orwell', 1949, true),
  ('Grande Sertão: Veredas', 'Guimarães Rosa', 1956, true),
  ('O Cortiço', 'Aluísio Azevedo', 1890, false);

INSERT INTO emprestimos (livro_id, pessoa, data_emprestimo, data_devolucao) VALUES
  (2, 'Ana', '2026-08-01', NULL),
  (5, 'Bruno', '2026-07-15', '2026-07-30');
