# Rota POST e o corpo da requisição

`app.use(express.json())` (já configurado) faz o Express entender um corpo JSON e disponibilizá-lo em `req.body`. `pool.query(sql, [valores])` usa `$1`, `$2`... como placeholders — isso evita SQL injection, porque os valores nunca são concatenados direto na string.
