document.addEventListener('DOMContentLoaded', function () {
    const selectUser = document.getElementById('userActions');
    const username = localStorage.getItem('username');

    if (username) {
        // Atualiza a primeira opção com o nome do usuário
        selectUser.options[0].textContent = username;
    }

    // Evento de mudança no select
    selectUser.addEventListener('change', function () {
        if (this.value === 'logout') {
            alert("Você saiu da sua conta :(");
            localStorage.removeItem('username'); // Limpa o nome salvo
            window.location.href = 'index.html'; // Redireciona para a página inicial
        }
    });
});

// js/auth.js
document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');

    if (!username) {
        // Redireciona para a página de login ou index
        window.location.href = 'index.html';
    }
});

