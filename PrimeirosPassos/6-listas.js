console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDeDestinos.push(`Minas Gerais`); //Add um item na lista dps dela declarada
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

//Deletando itens de um array - passar posição do item e a qt de itens a partir daquela posição que quer deletar
listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //imprimindo em posição específica

