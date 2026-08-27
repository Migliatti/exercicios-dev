# 04.01 — Rota GET /livros

Antes de testar, garanta que a tabela `livros` tem algumas linhas (ela ficou vazia depois das migrations da seção 03):

    echo "INSERT INTO livros (titulo, autor, ano, disponivel) VALUES ('Dom Casmurro','Machado de Assis',1899,true), ('O Hobbit','J.R.R. Tolkien',1937,false);" | docker compose exec -T postgres psql -U biblioteca -d biblioteca

Implemente o `TODO` em `app.ts`, depois rode:

    npx tsx problem/app.ts

E em outro terminal:

    curl http://localhost:3000/livros

Resultado esperado: um array JSON com os 2 livros inseridos acima.

Atenção: se o Postgres não estiver rodando (ou a conexão falhar), o processo do servidor pode travar/derrubar com um erro não tratado em vez de responder com um HTTP de erro limpo — isso é esperado nesta etapa do curso (Express 4 não captura rejeições de promises em rotas `async` automaticamente), não é um bug no seu código.
