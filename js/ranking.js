document.addEventListener("DOMContentLoaded", () => {
  const rankingList = document.getElementById("rankingList");
  const rankingData = JSON.parse(localStorage.getItem("rankingData")) || [];
  const username = localStorage.getItem("username") || "desconhecido";


  // Ordena por pontuação (maior para menor)
  rankingData.sort((a, b) => b.score - a.score);

  // Monta a tabela
  if (rankingData.length === 0) {
    rankingList.innerHTML = "<p>Nenhuma pontuação registrada ainda.</p>";
  } else {
    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>Usuário</th>
          <th>Pontos</th>
          <th>Tentativas</th>
          <th>Tempo</th>
          <th>Dificuldade</th>
          <th>Cartas</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        ${rankingData.map(item => `
          <tr>
            <td>${item.user}</td>
            <td>${item.score}</td>
            <td>${item.attempts}</td>
            <td>${item.time}</td>
            <td>${item.difficulty}</td>
            <td>${item.cards}</td>
            <td>${item.date}</td>
          </tr>
        `).join("")}
      </tbody>
    `;
    rankingList.appendChild(table);
  }
});

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
