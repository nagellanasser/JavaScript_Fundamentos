const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Percorrer o array e para cada elemento a função callback é executada
aprovados.forEach(function(nome, indice, /*array*/){ //indice é sempre passado como segundo paramentro
    console.log(`${indice+1}) ${nome}`)
    //console.log(array) //facultativo
})

// arrow function com apenas um parametro
aprovados.forEach(nome => console.log(nome))

// Armazenar função numa variável e passar essa função por parametro pro forEach()
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)
