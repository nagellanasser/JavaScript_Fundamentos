const pilotos = ['Verttel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos) //4 elementos

pilotos.pop() //remove o último elemento do array
console.log(pilotos) //3 elementos na lista

pilotos.push('Verstappen') //add elemento na última posição do array
console.log(pilotos)

pilotos.shift() //remove o 1º elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //add elemento a 1ª posição do array
console.log(pilotos)

// SPLICE: add e remove elementos

// Adicionar
// Adicionando no índice 2, ñ deletará ninguém, dados a serem add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
// No índice 3, removerá um elemento
pilotos.splice(3, 1)
console.log(pilotos)

//SLICE: Retorna um novo array
//Pega um novo array a partir do índice 2
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// 1º elemento é o índice q apartir dele começa a pegar dados p/ o novo array. O 1º índice q vc passa entra
// 2º elemento é o limite do array (o valor da posição não entra no novo array)
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
