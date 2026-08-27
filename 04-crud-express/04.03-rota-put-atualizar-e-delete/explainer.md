# Rota PUT/DELETE e parâmetros de rota

`req.params.id` lê o `:id` da URL (`/livros/:id`). `RETURNING *` na query devolve a linha afetada — se `resultado.rows` vier vazio, é porque nenhuma linha bateu com o `id`, e a rota responde `404`.
