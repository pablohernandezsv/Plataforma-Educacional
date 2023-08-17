// class Pessoa {
//     constructor(nome, sobrenome, email, senha) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//         this.email = email
//         this.senha = senha
//     }
// }

// const cache = localStorage.getItem('cadastro')
// // console.log({ cache })

// let pessoas = Boolean(cache) ? JSON.parse(cache) : []


// function Cadastro() {
//     //console.log(document.querySelector(".difs-um"))
//     console.log(document.getElementById('nome').value)
//     console.log(document.getElementById('sobrenome').value)
//     console.log(document.getElementById('email').value)
//     console.log(document.getElementById('senha').value)

//     console.log({ pessoas })

//     pessoas.push(new Pessoa(document.getElementById('nome').value,
//         document.getElementById('sobrenome').value,
//         document.getElementById('email').value,
//         document.getElementById('senha').value))
//     console.log(pessoas);

//     document.getElementById('nome').value = ""
//     document.getElementById('sobrenome').value = ""
//     document.getElementById('email').value = ""
//     document.getElementById('senha').value = ""
//     localStorage.setItem('cadastro', JSON.stringify(pessoas))
// }

// //funcao que verifica se email já esta cadastro e caso esteja abre a proxima tela
// function verificaEmail() {
//     let conteudoBoxEmail = document.getElementById("boxEmailIndex").value;
//     let cadastro = localStorage.getItem('cadastro')
//     let verificaEmailExiste = false
//     JSON.parse(cadastro).forEach(element => {
//         if (conteudoBoxEmail === element.email) {
//             verificaEmailExiste = true
//         }
//     });
//     if (verificaEmailExiste) {
//         console.log("entrou");
//         window.location = 'cadastro.html';
//     }

// }

// // let ClicarLogin = document.getElementById("loginIndex");
// // console.log(ClicarLogin);
// // if (ClicarLogin) {
// //     ClicarLogin.addEventListener("click", (event) => {
// //         let conteudoBoxEmail = document.getElementById("boxEmailIndex").value;
// //         console.log(conteudoBoxEmail);
// //         console.log("olá");
// //         // button.textContent = `Click count: ${event.detail}`;
// //     });
// // }

// // console.log(ClicarLogin);

// function VerificarSenha() {
//     console.log(pessoas);
// }

// // let x = localStorage.getItem('cadastro')


// // console.log(JSON.parse(x))


// // JSON.parse(x).forEach(element => {
// //     console.log(element.email);
// // });


function cadastrar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Enviar os dados para o backend usando uma requisição AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/cadastro", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    
    var data = {
        nome: nome,
        email: email,
        senha: senha
    };
    
    xhr.send(JSON.stringify(data));
}