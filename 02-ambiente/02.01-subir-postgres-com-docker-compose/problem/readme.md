# 02.01 — Subir Postgres com Docker Compose

Complete os dois `TODO`s em `docker-compose.yml`.

Suba com:

    docker compose -f problem/docker-compose.yml up -d

Confira com:

    docker compose -f problem/docker-compose.yml exec postgres-treino psql -U treino -d treino -c "SELECT 1;"

Resultado esperado: uma linha com o valor `1`.

Ao terminar, derrube o container de treino (ele não é usado por nenhum outro exercício):

    docker compose -f problem/docker-compose.yml down -v
