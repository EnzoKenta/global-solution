
document.querySelector("#login").addEventListener("submit", function(event){
    event.preventDefault();
    const emailcerto = 'admin@gmail.com';
    const senhacerta = '123';
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const usuarioarmazenado = JSON.parse(localStorage.getItem("usuario"));
    if ((email === emailcerto && senha === senhacerta) || (usuarioarmazenado && usuarioarmazenado.email === email && usuarioarmazenado.senha === senha)) {
        alert('Login bem-sucedido!');
        window.location.href = 'inicial.html';
    } else {
        alert('Email ou senha incorretos.');
    }
}

)