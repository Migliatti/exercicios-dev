# Teste de integração de um endpoint

Um teste de integração chama a aplicação de verdade (rotas + banco), não só uma função isolada. `supertest` sabe conversar com um app Express sem precisar dele estar rodando numa porta — `request(app).get("/rota")` já dispara a requisição internamente.
