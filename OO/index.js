import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//novo obj do "molde" - nova instancia da classe
const cliente1 = new Cliente("Ricardo", 11122233344);

const cliente2 = new Cliente("Alice", 55566677788);
//console.log(cliente2);
//console.log(cliente2.cpf);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
//console.log(contaCorrenteRicardo);

const contaCorrenteAlice = new ContaCorrente(201, cliente2);
//console.log(contaCorrenteAlice);

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);


console.log(ContaCorrente.numeroDeContas);


//console.log(contaCorrenteAlice);

//Só o cliente
//console.log(contaCorrenteAlice.cliente);
// Só saldo 
//console.log(contaCorrenteAlice.saldo);


/* const valorDepositado = contaCorrenteRicardo.depositar(2000);
console.log(valorDepositado);
const valorSacado = contaCorrenteRicardo.sacar(5000);
console.log(valorSacado); */

