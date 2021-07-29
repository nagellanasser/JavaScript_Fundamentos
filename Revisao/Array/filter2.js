Array.prototype.filter2 = function (callback) {
    const newArray = [] //pois os elementos filtrados geram um novo array
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //ñ precisa de == ou coisa do tipo, pq ele já retorna false ou true

console.log(produtos.filter(caro).filter2(fragil))