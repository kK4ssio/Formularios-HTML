function ValidaSenha() {
    var senha = document.getElementById("senha").value;
    var valsenha = document.getElementById("confirmasenha").value;

    if (valsenha == senha) {
        alert("Senha Confirmada !")
       
    }
    else {
        alert("houve uma confusão de senhas")
    }

}