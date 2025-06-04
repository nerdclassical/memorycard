document.addEventListener('DOMContentLoaded', function() {
    // Elementos comuns
    const formLogin = document.getElementById('form-login');
    const formCadastro = document.getElementById('form-cadastro');
    
    // Função de animação de erro
    function shakeForm(form) {
        form.style.animation = 'shake 0.5s';
        setTimeout(() => form.style.animation = '', 500);
    }

    // Página de Login
    if (formLogin) {
        const btnCriarConta = document.getElementById('button');
        const container = document.querySelector('.container');
        
        btnCriarConta.addEventListener('click', function() {
            container.style.animation = 'slideOutLeft 0.5s forwards';
            setTimeout(() => window.location.href = 'cadastro.html', 500);
        });
        
        const btnLogin = document.getElementById('Login');
        btnLogin.addEventListener('click', function(e) {
            e.preventDefault();
            const usuario = document.querySelector('#form-login input[type="email"]').value;
            const senha = document.querySelector('#form-login input[type="password"]').value;
            
            if (!usuario || !senha) {
                shakeForm(formLogin);
                return;
            }
            
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const usuarioEncontrado = usuarios.find(u => u.email === usuario && u.senha === senha);
            
            if (usuarioEncontrado) {
                localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
                container.style.animation = 'fadeOut 0.5s forwards';
                setTimeout(() => window.location.href = 'menu.html', 500);
            } else {
                shakeForm(formLogin);
                alert('Usuário ou senha incorretos!');
            }
        });
    }
    
    // Página de Cadastro
    if (formCadastro) {
        // ... (manter código existente)
    }
});