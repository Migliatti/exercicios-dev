# Migrations

Uma migration é um arquivo versionado que descreve uma mudança no schema do banco (`up`) e como desfazê-la (`down`). Diferente do SQL cru que você rodou na seção anterior, migrations ficam no controle de versão e podem ser aplicadas/revertidas em qualquer ambiente na mesma ordem. `node-pg-migrate` gera migrations em JavaScript simples (CommonJS) por padrão — mesmo num projeto TypeScript, é assim que a ferramenta funciona, e é o padrão que o `helpdesk-system` real também vai seguir.

As tabelas `livros`/`emprestimos` que você criou na seção `01-sql-basico` foram feitas via SQL cru, sem controle de versão. Aqui, elas são recriadas do zero como migrations — a forma real de gerenciar banco no `helpdesk-system`.
