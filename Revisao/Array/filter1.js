//FILTER: Filtrando um array a partir de um filtro

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (prod) { //passando minha callback
    return false //retorna respostas tru e false (a lógica)
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //ñ precisa de == ou coisa do tipo, pq ele já retorna false ou true

console.log(produtos.filter(caro).filter(fragil))