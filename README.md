# exercícios-dev

Exercícios pequenos e graduados de programação — TypeScript, Node.js, SQL, Postgres, Express e testes — feitos pra praticar cada conceito isolado antes de aplicá-lo no [`helpdesk-system`](https://github.com/Migliatti/helpdesk-system) real.

## Como usar

Cada exercício tem três itens:

- `explainer.md` — o conceito, curto.
- `problem/` — código com `TODO`s. Tente implementar sozinho antes de olhar a solução.
- `solution/` — implementação de referência. Só olhe depois de tentar.

Sem correção automática nas seções `00` a `04` — rode o código/query e compare com o resultado descrito no `readme.md` de cada `problem/`. A partir da seção `05`, os próprios exercícios são sobre escrever testes automatizados com Vitest.

Uso de IA durante a tentativa: liberado só para fricção mecânica (erro de sintaxe, configuração de ambiente), em modo conversacional — nunca pra resolver a lógica do exercício por você.

## Pré-requisitos

- Node.js 18 ou mais recente
- Docker e Docker Compose

## Subir o ambiente

```bash
npm install
docker compose up -d
```

Isso sobe um Postgres em `localhost:5432` (usuário/senha/banco: `biblioteca`), usado por todas as seções a partir da `01-sql-basico`.

## Seções

| Seção | Conteúdo |
|---|---|
| `00-aquecimento-typescript` | funções e tipos, condicionais e loops, arrays e objetos |
| `01-sql-basico` | SELECT, WHERE, INSERT/UPDATE/DELETE, JOIN |
| `02-ambiente` | Docker Compose, conectar do Node |
| `03-migrations` | criar e alterar tabelas com `node-pg-migrate` |
| `04-crud-express` | rotas GET/POST/PUT/DELETE, validação |
| `05-testes-vitest` | testes unitários e de integração |
