function rand({ min = 0, max = 1000 }) { // usando destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
// ou:
//console.log(rand({max:50,min:40})) //passando uma função, passando um obj

console.log(rand({ min: 955 })) //Entao ele assumira que o max é 1000
console.log(rand({})) //Constr vazio, assumira min 0 e max 1000
