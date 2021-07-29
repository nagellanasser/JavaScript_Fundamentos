let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true
comparaComThis(this) // false

const obj = {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global) // false
comparaComThis(obj) // true

/*
 * Arrow - o this ñ aponta para o global como uma func normal apontaria.
 * Pq a func foi definida dentro de um módulo do node.
 * Cada arquivo do Node representa um módulo.
 * No contexto em que foi escrito (léxico) quem é o
 dono (this) dessa função seria o próprio módulo 
 no arquivo o qual a função foi definida
*/

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // (this) true
comparaComThisArrow(this) // true

// Usando bind e force mudança de contexto, NÃO vence o arrow
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true
comparaComThisArrow(this) // true