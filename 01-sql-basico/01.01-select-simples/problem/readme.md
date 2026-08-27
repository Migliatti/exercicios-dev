# 01.01 — SELECT simples

Antes de começar (setup único para toda a seção `01-sql-basico`), popule o banco com os dados usados por todos os exercícios desta seção:

    cat ../seed.sql | docker compose exec -T postgres psql -U biblioteca -d biblioteca

(No PowerShell: `Get-Content ../seed.sql -Raw | docker compose exec -T postgres psql -U biblioteca -d biblioteca`)

Escreva a query em `consulta.sql` (substituindo o `TODO`).

Rode com:

    cat problem/consulta.sql | docker compose exec -T postgres psql -U biblioteca -d biblioteca

(No PowerShell: `Get-Content problem/consulta.sql -Raw | docker compose exec -T postgres psql -U biblioteca -d biblioteca`)

Resultado esperado (5 linhas, título e autor, do livro mais antigo pro mais novo):

    O Cortiço              | Aluísio Azevedo
    Dom Casmurro           | Machado de Assis
    O Hobbit               | J.R.R. Tolkien
    1984                   | George Orwell
    Grande Sertão: Veredas | Guimarães Rosa
