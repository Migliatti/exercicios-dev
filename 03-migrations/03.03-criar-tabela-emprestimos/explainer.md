# Tabela com chave estrangeira

`references: "livros"` faz o `livro_id` apontar para `livros.id` — o banco passa a recusar um `livro_id` que não exista em `livros`. `onDelete: "CASCADE"` decide o que fazer se o livro referenciado for apagado (aqui, apaga o empréstimo junto).
