//função "normal" e exemplo como arrow

let dobro = function (a) {
    return 2 * a
}

//como arrow - funçõa arrow sempre é anônima se quer chama-la dps, tem armazenala em uma variavel ou constante
dobro = (a) => { return 2 * a }

//se tiver um único parametro tira parenteses
//tira o corpo da função vc tem um return implicito
dobro = a => 2 * a //return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

//arrow - se vc tem uma função sem paramentro tem q colocar () ou algo como paramentro _
ola = () => 'Ola'
ola = _ => 'Ola' //possui um parametro

console.log(ola())
