document.addEventListener('DOMContentLoaded', function() {
    // Elementos comuns a ambas as páginas
    const formLogin = document.getElementById('form-login');
    const formCadastro = document.getElementById('form-cadastro');
    
    // Verifica em qual página estamos
    if (formLogin) {
        // Página de Login
        const btnCriarConta = document.getElementById('button');
        const container = document.querySelector('.container');
        
        btnCriarConta.addEventListener('click', function() {
            // Animação de saída
            container.style.animation = 'slideOutLeft 0.5s forwards';
            
            setTimeout(() => {
                window.location.href = '../html/cadastro.html';
            }, 500);
        });
        
        // Validação do Login
        const btnLogin = document.getElementById('Login');
        btnLogin.addEventListener('click', function(e) {
            e.preventDefault();
            const usuario = document.querySelector('#form-login input[type="email"]').value;
            const senha = document.querySelector('#form-login input[type="password"]').value;
            
            if (!usuario || !senha) {
                shakeForm(formLogin);
                return;
            }
            
            // Verifica se o usuário existe no localStorage
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const usuarioEncontrado = usuarios.find(u => u.email === usuario && u.senha === senha);
            
            if (usuarioEncontrado) {
                // Salva nome/email no localStorage para referência futura
                localStorage.setItem("username", usuarioEncontrado.nome);

                container.style.animation = 'fadeOut 0.5s forwards';
                setTimeout(() => {
                    window.location.href = '../html/menu.html';
                }, 500);
            }else {
                shakeForm(formLogin);
                alert('Usuário ou senha incorretos!');
            }
        });
        
        // Anima a entrada na página de login
        container.style.animation = 'slideInRight 0.5s forwards';
        
    } else if (formCadastro) {
        // Página de Cadastro
        const btnEntrarAgora = document.querySelector('#form-cadastro .teladireita .button');
        const btnCadastrar = document.querySelector('#form-cadastro .telaesquerda .buttonR');
        const container = document.querySelector('.container');
        
        btnEntrarAgora.addEventListener('click', function() {
            // Animação de saída
            container.style.animation = 'slideOutRight 0.5s forwards';
            
            setTimeout(() => {
                window.location.href = '../html/login.html';
            }, 500);
        });
        
        // Validação do Cadastro
        btnCadastrar.addEventListener('click', function(e) {
            e.preventDefault();
            const nome = document.querySelector('#form-cadastro .telaesquerda input[type="email"]').value;
            const senha = document.querySelector('#form-cadastro .telaesquerda input[type="password"]').value;
            
            if (!nome || !senha) {
                shakeForm(formCadastro);
                return;
            }
            
            // Salva no localStorage
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            
            // Verifica se usuário já existe
            if (usuarios.some(u => u.email === nome)) {
                alert('Este usuário já está cadastrado!');
                return;
            }
            
            usuarios.push({
                nome: nome,
                email: nome, // Usando o mesmo campo para nome e email (ajuste conforme necessário)
                senha: senha,
                pontos: 0
            });
            
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            
            // Feedback visual
            const btn = e.target;
            btn.textContent = 'Cadastrado! ✔';
            btn.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                container.style.animation = 'fadeOut 0.5s forwards';
                setTimeout(() => {
                    window.location.href = '../html/login.html';
                }, 500);
            }, 1000);
        });
        
        // Anima a entrada na página de cadastro
        container.style.animation = 'slideInLeft 0.5s forwards';
    }
    
    // Função para animação de erro (shake)
    function shakeForm(form) {
        form.style.animation = 'shake 0.5s';
        setTimeout(() => {
            form.style.animation = '';
        }, 500);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');

    if (username) {
        // Se estiver logado, redireciona para a página principal
        window.location.href = 'menu.html';
    }
});
