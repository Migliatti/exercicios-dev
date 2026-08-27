# 01.04 — JOIN simples

Rode com:

    cat problem/consulta.sql | docker compose exec -T postgres psql -U biblioteca -d biblioteca

Resultado esperado (1 linha, já que o empréstimo do Bruno foi apagado em 01.03):

    O Hobbit | Ana
