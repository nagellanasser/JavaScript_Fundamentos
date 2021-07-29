const pessoa = {
    saudacao : 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar //armazenando a func numa variavel 
falar() // conflito entre paradigmas: funcional e OO

//bind - passa um obj o qual vc quer q o this seja resolvido || amarra this 
const falarDePessoa = pessoa.falar.bind(pessoa) //o this sera sempre pessoa
falarDePessoa()
  