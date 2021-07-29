import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _saldo = 0; //boas práticas/convensão da comunidade usar: _ na frente do nome do campo que é para ser considerados privado em Js    //métodos
    //#saldo = 0; //deixa o campo privado  https://github.com/tc39/proposal-class-fields#private-fields
    _cliente;
    //atribuir
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas +=1;
    }

    sacar(valor) {
        if (this._saldo < valor || this._saldo === 0) { //método de early return
            //console.log(`Saldo insuficiente para saque.\nSaldo atual: R$ ${this._saldo}`);
            return (`Saldo insuficiente para o saque de R$ ${valor} requerido.\nSaldo atual: R$ ${this._saldo}\n`);
        }
        this._saldo -= valor;
        //console.log(`Saque realizado.\nSaldo atual: R$ ${this._saldo}`);
        //return (`Saque de R$ ${valor} realizado.\nSaldo atual: R$ ${this._saldo}\n`);
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) { //método de early return
            //console.log(`Não é possível efetuar um depósito de valores nulos ou negativos.`);
            return (`Não é possível efetuar um depósito de valores nulos ou negativos.\n`);
        }
        this._saldo += valor;
        //console.log(`Depósito realizado.\nSaldo atual: R$ ${this._saldo}`);
        return (`Depósito de R$ ${valor} realizado.\nSaldo atual: R$ ${this._saldo}\n`);

    }

    transferir(valor, conta) {
        //tirar dinheiro da conta atual
        const valorSacado = this.sacar(valor);
        //depositar na conta desejada
        conta.depositar(valorSacado);
        conta.cidade = "São Paulo" //atributo dinamicamente atribuído

    }
}