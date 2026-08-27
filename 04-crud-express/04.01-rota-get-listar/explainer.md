# Rota GET em Express

Uma rota Express é `app.METODO(caminho, handler)`. O handler recebe `req` (a requisição) e `res` (a resposta) e decide o que devolver — aqui, `res.json(dados)` serializa `dados` como JSON e define o `Content-Type` certo sozinho.
