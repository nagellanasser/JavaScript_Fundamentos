// Array em js é um objeto. De tamanho dinamico
// Organiza seus dados através de índices (estrutura indexada) começando do 0

console.log(
    typeof Array, // função
    typeof new Array, // objeto
    typeof [] // objeto --- typeof [] - array literal
)

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // notação literal recomendada pelas boas práticas
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined

aprovados[3] = 'Paulo' //normalmente usado para substituicao de dados
console.log(aprovados)

aprovados.push('Abia')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados[8] === undefined) //true
console.log(aprovados[8] === null) //false

console.log(aprovados)

aprovados.sort() //ordena, causa alteração no array[] no qual chamou a função sort
console.log(aprovados)

delete aprovados[1] // deleta como se vc deletasse um atributo de um obj. No caso, o elemento será excluído e no lugar colocado undefined naquela posição.
console.log(aprovados)
console.log(aprovados[1])
console.log(aprovados[2])

//reatribuido
aprovados = ['Bia', 'Carlos', 'Ana','Jane']

//splice: 1º índice em q qr trabalhar, 2º qtd de elementos atigidos pela ação, 3º elementos a serem add
//      add elementos num determinado índice
//      remover elementos de um array
//      add e remover elementos ao mesmo tempo
aprovados.splice(1,1)
console.log(aprovados)

//aprovados.splice(1,2,'Elemento [1]','Elemento [2]')
//console.log(aprovados) 

//aprovados.splice(1,0,'Elemento [1]','Elemento [2]')
//console.log(aprovados) 

//aprovados.splice(1,1,'Elemento [1]','Elemento [2]')
//console.log(aprovados) 
