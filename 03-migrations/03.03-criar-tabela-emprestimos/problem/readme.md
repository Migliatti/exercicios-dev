# 03.03 — Criar tabela emprestimos

Gere a migration:

    npx node-pg-migrate create criar-tabela-emprestimos

Implemente `up`/`down` no arquivo gerado, seguindo os `TODO`s de `exemplo-migration.js` (referência nesta pasta).

Aplique com:

    npm run migrate:up

Confira com:

    echo "\d emprestimos" | docker compose exec -T postgres psql -U biblioteca -d biblioteca

Resultado esperado: as 5 colunas listadas acima, com `livro_id` mostrando a referência a `livros`.
