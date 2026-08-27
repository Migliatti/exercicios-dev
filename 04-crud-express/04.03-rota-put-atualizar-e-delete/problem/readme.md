# 04.03 — Rota PUT (atualizar) e DELETE

Implemente os dois `TODO`s em `app.ts`, depois rode:

    npx tsx problem/app.ts

Teste o PUT (troque `1` pelo id de um livro existente):

    curl -X PUT http://localhost:3000/livros/1 -H "Content-Type: application/json" -d "{\"titulo\":\"Dom Casmurro\",\"autor\":\"Machado de Assis\",\"ano\":1899,\"disponivel\":false}"

Resultado esperado: status `200` e o livro atualizado com `disponivel: false`.

Teste o DELETE:

    curl -i -X DELETE http://localhost:3000/livros/1

Resultado esperado: status `204`, sem corpo.
