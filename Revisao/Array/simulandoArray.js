// obj base
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)

//Criando o método 'toString' dentro do obj quaseArray de forma não listada
//toString sumulará a impressão no console como se fosse um array
Object.defineProperty(quaseArray, 'toString', { //criando obj que representará todos os atributos do atributo 'toString'
    value: function () { //toString será uma função
        return Object.values(this) //imprimi os valores do obj referenciado, no caso this - obj atual
    }, enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)