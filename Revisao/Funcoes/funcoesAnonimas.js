// Função anônima é uma função sem nome
const soma = function (x, y) {
    return x + y
}

const mult = function (x, y) {
    return x * y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, mult)
imprimirResultado(3, 4, function (x, y) {  // função anônima
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) //arrow será sempre uma func anonima.

/*
 * Função anonima: exemplo função dentro de um obj
 acessando a função anônima através de um atributo de um obj definido (chave/valor)
*/
 const pessoa = {
    falar: function(){ //
        console.log('Opa')
    }
}

pessoa.falar()

//outra forma de escrita
const pessoa2 = {
    falar2(){ //
        console.log('Blz')
    }
}

pessoa2.falar2()