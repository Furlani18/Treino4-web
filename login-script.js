function mostrarRegistro() {
    document.querySelector('.login').style.display = 'none';
    document.getElementById('registro').style.display = 'block';
}

function mostrarLogin() {
    document.querySelector('.login').style.display = 'block';
    document.getElementById('registro').style.display = 'none';
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    // Simulação de login - aqui você pode integrar ao backend
    alert(`Bem-vindo de volta, ${email}!`);
    return false;
}

function registrar(event) {
    event.preventDefault();
    const nome = document.getElementById('registroNome').value;
    const email = document.getElementById('registroEmail').value;
    const senha = document.getElementById('registroSenha').value;

    // Simulação de registro - aqui você pode integrar ao backend
    alert(`Usuário ${nome} registrado com sucesso!`);
    mostrarLogin();
    return false;
}
