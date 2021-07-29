console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos, "\n");

if (idadeComprador >= 18) {
    //     console.log("Comprador maior de idade.");
    //     listaDeDestinos.splice(2, 1); //removendo item
    // } else if(estaAcompanhada == true) {
    //     console.log("Comprador está acompanhado.");
    //     listaDeDestinos.splice(1, 1); //removendo item
    // } else {
    //     console.log("Não é maior de idade, não posso vender.");
}

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!\n");
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log("Não é maior de idade, não posso vender.\n");
}

console.log("Embarque:")
if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem!\n");
} else {
    console.log("Você não pode embarcar.\n");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);


