// MAP serve para fazer uma transformação no array
// A ideia é mapear um array para outro array do mesmo tamanho só que com dados transformados

const numeros = [1, 2, 3, 4, 5]

// MAP - For com propósito
let resultado = numeros.map(elemento => elemento * 2) //usando arrow function

/*
    ou
    let resultado = numeros.map(function(elemento){
        return elemento * 2
    })
*/

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)