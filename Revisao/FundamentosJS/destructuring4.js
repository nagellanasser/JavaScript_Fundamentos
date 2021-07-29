function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //destructuring // criado array após desistruração

        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
}

console.log(rand([50,40])) //randomico max 50 e min 40
console.log(rand([992])) //randomico min 992
console.log(rand([,10])) //min padrao (zero, no caso) max 10
console.log(rand([])) //pega valores padroes max 1000 e min 0