// Desestruturação de um array. 
// Exemplo de um array de uma posição e extrair esse valor.

const [a] = [10] //usando operador destricturing
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

