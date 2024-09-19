// Operadores de Igualdade/Diferença Simples e Estrita em JavaScript

// Operadores Simples:
// Comparam apenas os valores, sem considerar o tipo de dado
let a = 5;
let b = '5';

// Exemplo de uma comparação simples:
console.log(a == b); // Retorna true, pois os valores são iguais
//  a é um número e b é uma string, mas a comparação simples ignora isso

// Operadores Estritos:
// Comparam tanto os valores quanto os tipos de dados
let c = 5;
let d = '5';

// Exemplo de uma comparação estrita:
console.log(c === d); // Retorna false, pq os tipos de dados são diferentes
// Aqui, a comparação estrita verifica se os valores e os tipos de dados são iguais

// Diferenças importantes
// Os operadores simples podem ocasionar em erros inesperados se não forem usados com cautela e da maneira certa
// Os operadores estritos são mais seguros e devem ser usados sempre que possível!!!