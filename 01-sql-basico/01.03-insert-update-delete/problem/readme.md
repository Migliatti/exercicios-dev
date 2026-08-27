# 01.03 — INSERT, UPDATE, DELETE

Rode com:

    cat problem/consulta.sql | docker compose exec -T postgres psql -U biblioteca -d biblioteca

Depois, confira o resultado com:

    echo "SELECT titulo, disponivel FROM livros ORDER BY id;" | docker compose exec -T postgres psql -U biblioteca -d biblioteca

Resultado esperado: 6 livros agora (o novo "Capitães da Areia" no final), "1984" com `disponivel = f`, e nenhuma linha de "Bruno" mais em `emprestimos`.
