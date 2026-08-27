# Validação de entrada

Nunca confie no corpo de uma requisição. Antes de inserir no banco, cheque se os campos obrigatórios existem e têm o tipo certo — se não tiverem, devolva `400` (Bad Request) com uma mensagem clara, sem nem chegar a rodar a query.
