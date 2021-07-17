/*Campo para guardar nome e sobrenome  do úsuario
  Campo para guardar email do usuario
  Campo para guardar senha
     Se a segunda senha estiver errada
     Bloquear botao
     mandar o usuario digitar novamente
     Quando a senha estiver certa liberar o botão*/

var nomeSobreNome = document.querySelector('.nomeUsuario');
var emailUsuario = document.querySelector('.email');
var senhaUsuario = document.querySelector('.senha');
var confirmSenha = document.querySelector('.senhaConfirm');

var enviarDados = document.querySelector('.SignUpbutton');

function validarSenha(){
    senha = senhaUsuario.value;
    rp_Senha = confirmSenha.value;
    if(senha.length<5){
        alert('Senha no minimo 6 caracteres')
    }else if(rp_Senha!=senha){
        alert('senha incorreta')
    }
}

enviarDados.addEventListener('click', validarSenha)