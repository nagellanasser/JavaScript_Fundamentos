Array.prototype.map2 = function (callback) {
    const newArray = []
    //percorrer o array
    for (let i = 0; i < this.length; i++) { //percorrendo o array original usando this
        //Dentro de cada iteração, chama a função callback passando o elemento atual, índice e array original.
        //Colocando o resultado isso dentro do newArray
        newArray.push(callback(this[i], i, this))
    }
    return newArray //retornando o novo array
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
// 1o map - chamar json.parse para transformar as strings em obj's
//2o map - receber apenas o elemento de entrada e retornar apenas o preço

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map2(apenasPreco)
console.log(resultado)