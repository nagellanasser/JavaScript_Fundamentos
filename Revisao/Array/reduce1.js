// REDUCE - é uma função que serve p/ transformar um array em um outro elemento (array, n°, string) 
// acumulador a cada iteração

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(aluno => aluno.nota))

// função reduce
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}/*, <valor_inicial> */)

console.log(resultado)

