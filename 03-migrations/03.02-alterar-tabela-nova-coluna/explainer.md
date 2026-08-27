# Alterar uma tabela existente

`pgm.addColumn("tabela", { coluna: { type, ... } })` adiciona uma coluna a uma tabela que já existe, sem apagar os dados. O oposto, `pgm.dropColumn`, remove a coluna — é o que o `down` desta migration faz, pra que ela seja reversível.
