console.log(`\nTrabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("Destinos possíveis:");
console.log(listaDeDestinos, "\n");

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador <= 4) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log(`Destino existe: ${destinoExiste}`);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Ocorreu algum erro.")
}

for (let i = 0; i < 4; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}


