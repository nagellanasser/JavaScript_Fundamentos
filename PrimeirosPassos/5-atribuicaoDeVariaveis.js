console.log("Trabalhando com atribuição de variáveis");
//tipo: const ou let
//const idade = 29;
const primeiroNome = "Ricardo";
const sobrenome = "Bugan"

//console.log(nome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); //Interpolação de variáveis

let contador = 0;
contador = contador + 1;

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando variável
idade = 26; //atribuindo valor 
idade = idade + 1; //reatribuindo valor
console.log(idade);