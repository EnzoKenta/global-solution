document.getElementById('cadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Usuário cadastrado com sucesso!');
    window.location.href("login.html");
});
