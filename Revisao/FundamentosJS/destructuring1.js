//Operador de desestruturação. Ele tira da estrutura (obj) algo.
// Uma forma de extrair de um obj seus atributos;
// Array - tirar elementos do array
// Ha duas formas de escrita
//Ambito de objeto na sintaxe {}
//Ambito de array na sintaxe []


//novo  recurso ES2015 (ES6)

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //Tire do obj (pessoa) o atributo nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)