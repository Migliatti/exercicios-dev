# 04.02 — Rota POST /livros

Implemente o `TODO` em `app.ts`, depois rode:

    npx tsx problem/app.ts

E em outro terminal:

    curl -X POST http://localhost:3000/livros -H "Content-Type: application/json" -d "{\"titulo\":\"1984\",\"autor\":\"George Orwell\",\"ano\":1949}"

Resultado esperado: status `201` e um JSON com o livro criado, incluindo um `id` novo e `disponivel: true`.
