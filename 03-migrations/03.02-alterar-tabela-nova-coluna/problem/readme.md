# 03.02 — Alterar tabela (nova coluna)

Gere a migration:

    npx node-pg-migrate create adicionar-editora-em-livros

Implemente `up`/`down` no arquivo gerado, seguindo os `TODO`s de `exemplo-migration.js` (referência nesta pasta).

Aplique com:

    npm run migrate:up

Confira com:

    echo "\d livros" | docker compose exec -T postgres psql -U biblioteca -d biblioteca

Resultado esperado: a coluna `editora` (tipo `text`, aceita nulo) aparece na lista.
