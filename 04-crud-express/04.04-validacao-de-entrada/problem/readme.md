# 04.04 — Validação de entrada

Implemente os dois `TODO`s dentro da rota `POST /livros`.

Rode:

    npx tsx problem/app.ts

Teste um caso inválido:

    curl -i -X POST http://localhost:3000/livros -H "Content-Type: application/json" -d "{\"ano\":1899}"

Resultado esperado: status `400` e corpo `{"erro":"titulo é obrigatório"}`.

Teste um caso válido:

    curl -i -X POST http://localhost:3000/livros -H "Content-Type: application/json" -d "{\"titulo\":\"Dom Casmurro\",\"autor\":\"Machado de Assis\",\"ano\":1899}"

Resultado esperado: status `201` com o livro criado.
