const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

/* 
    Desafio 1: 
        Retornar verdadeiro ou falso para a pergunta: Todos os alunos são bolsistas? 
*/
const todosBolsistas = (resultado, bolsista) => resultado && bolsista // resultado && bolsista = anterior && atual
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas))


/* 
    Desafio 2: 
         Retornar verdadeiro ou falso para a pergunta: Algum aluno é bolsista? 
*/
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista))
