//Criando um prototype de um array, pois forEach2 não existe
//associando forEach2 a função q se qr q percorra de fato o array
Array.prototype.forEach2 = function (callback) { //recebe uma func callback/lambda
    //percorrer o array
    for (let i = 0; i < this.length; i++){
        //chamando a função callback a partir de 3 parametros: valor, indice, array completo
        callback(this[i], i, this)
    }
} 
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Percorrer o array e para cada elemento a função callback é executada
aprovados.forEach2(function (nome, indice, array) { //indice é sempre passado como segundo paramentro
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})