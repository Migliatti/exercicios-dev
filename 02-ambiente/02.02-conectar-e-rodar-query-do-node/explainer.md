# Conectar do Node ao Postgres

O pacote `pg` fornece um `Pool` que gerencia conexões com o Postgres. Sem nenhuma configuração explícita, o `Pool` lê `PGHOST`/`PGPORT`/`PGUSER`/`PGPASSWORD`/`PGDATABASE` do ambiente — por isso o `.env` da raiz já basta. `pool.query(sql)` devolve uma Promise; `await` espera o resultado antes de seguir.
