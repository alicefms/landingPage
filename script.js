function guardarEmail() {
    let email = document.getElementById("input").value;
    localStorage.setItem('emailCadastrado', email);
    alert('Email Cadastrado com sucesso!')
}
