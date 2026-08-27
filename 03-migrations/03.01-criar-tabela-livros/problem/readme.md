# 03.01 — Criar tabela livros (migrations)

Primeiro, apague as tabelas antigas (feitas via SQL cru na seção 01):

    echo "DROP TABLE IF EXISTS emprestimos, livros;" | docker compose exec -T postgres psql -U biblioteca -d biblioteca

Depois, gere uma migration nova:

    npx node-pg-migrate create criar-tabela-livros

Isso cria um arquivo em `migrations/<timestamp>_criar-tabela-livros.js`. Abra esse arquivo e implemente `up`/`down` seguindo os `TODO`s de `exemplo-migration.js` (nesta pasta) — o exemplo é só referência, o arquivo real que o `node-pg-migrate` usa é o gerado em `migrations/`.

A tabela `livros` deve ter: `id` (serial, chave primária), `titulo` (text, obrigatório), `autor` (text, obrigatório), `ano` (integer, obrigatório), `disponivel` (boolean, obrigatório, default `true`).

Aplique com:

    npm run migrate:up

Confira com:

    echo "\d livros" | docker compose exec -T postgres psql -U biblioteca -d biblioteca

Resultado esperado: a lista de 5 colunas com os tipos acima.
