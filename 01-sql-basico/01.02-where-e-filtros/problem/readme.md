# 01.02 — WHERE e filtros

Rode com:

    cat problem/consulta.sql | docker compose exec -T postgres psql -U biblioteca -d biblioteca

Resultado esperado (2 linhas): os livros "O Hobbit" e "O Cortiço" — os dois com `disponivel = f`.
