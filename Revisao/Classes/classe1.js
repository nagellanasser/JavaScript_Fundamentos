class Lancamento {
    //função por padrão chamada no momento q essa classe é instanciada usando o operador new
    //paramentros da função construtora
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { //... recebe 1 ou mais lancamentos
        lancamentos.forEach(elemento => this.lancamentos.push(elemento))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(elemento => {
            valorConsolidado += elemento.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(7,2021)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())