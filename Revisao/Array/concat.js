// CONCAT - concatenar vários arrays em um único array OU 
//vários elemesntos que são passados como parametros para um método concat

const filhas = ['Elsa', 'Anna']
const filhos = ['Kristoff', 'Hans']
const pais = ['Agnarr', 'Iduna']
const todos = pais.concat(filhos, filhas, 'Olaf', 'Sven')

console.log(todos)
console.log(pais, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))

console.log(['a', 'b'].concat(['c', 'd'], ['f', 'g'], 'e', [['h', 'i']]))