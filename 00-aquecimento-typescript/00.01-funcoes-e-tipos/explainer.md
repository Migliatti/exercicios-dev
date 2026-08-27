# Funções e tipos em TypeScript

Uma função pode anotar o tipo dos parâmetros (`titulo: string`) sem precisar anotar o tipo de retorno — o compilador infere a partir do que a função devolve.

`formatarLivro` recebe uma string e um number, e devolve uma string (inferida). `situacaoDoLivro` recebe um boolean e devolve uma string, usando o operador ternário `condicao ? seVerdadeiro : seFalso`.
