/*
 * Exemplo de aplicação em um cenário em que o this 
 dentro da função arrow ele será fixo.
 * This baseado no contexto em que a função foi escrita
 e ñ o fato da função ser chamada de lugares diferentes 
 não influencia o valor do this.
 * Ex baseado no usado em thisEBind2.js
*/

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

new Pessoa
