class Pessoa{
    constructor(nome,sobrenome,email,senha){
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.senha = senha
    }
}

let pessoas = []

function Cadastro(){
    //console.log(document.querySelector(".difs-um"))
    console.log(document.getElementById('nome').value)
    console.log(document.getElementById('sobrenome').value)
    console.log(document.getElementById('email').value)
    console.log(document.getElementById('senha').value)

    pessoas.push(new Pessoa(document.getElementById('nome').value,
                             document.getElementById('sobrenome').value,
                             document.getElementById('email').value,
                             document.getElementById('senha').value))
    console.log(pessoas);

    document.getElementById('nome').value = ""
    document.getElementById('sobrenome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('senha').value = ""

}


function VerificarSenha() {
    console.log(pessoas);
}