Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0] //iniciando acumulador com os dados do índice 0
    for (let i = 1; i < this.length; i++) { //percorrendo array a partir do índice [1], pois acumulador já inicia com o dado da posição [0]
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

Array.prototype.reduce3 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1 //Se o valor inicial tiver setado, qr dizer q o indiceInicial sera 0 senão 1
    let acumulador = valorInicial || this[0] //valor inicial ou o 1º elemento do array
    for (let i = indiceInicial; i < this.length; i++) {  
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const numeros = [1, 2, 3, 4, 5, 6]
console.log(numeros.reduce2(soma))
console.log(numeros.reduce3(soma))
console.log(numeros.reduce3(soma, 21))
