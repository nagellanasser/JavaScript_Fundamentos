const escola = [{
    nome: 'Turma A',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma B',
    alunos: [{
        nome: 'Flavia',
        nota: 8.9
    }, {
        nome: 'Pedro',
        nota: 7.3
    }]
}]

//extraindo a nota de aluno
const getNotaDoAluno = aluno => aluno.nota

// extraindo da turma todas as notas
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)

// Se fosse para criar nosso flatMap
Array.prototype.flatMap2 = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
} 

const notas3 = escola.flatMap2(getNotasDaTurma)
console.log(notas3)

