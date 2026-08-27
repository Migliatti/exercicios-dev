INSERT INTO livros (titulo, autor, ano, disponivel)
VALUES ('Capitães da Areia', 'Jorge Amado', 1937, true);

UPDATE livros SET disponivel = false WHERE titulo = '1984';

DELETE FROM emprestimos WHERE pessoa = 'Bruno';
