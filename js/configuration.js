   function iniciarJogo() {
        const cardCount = document.getElementById("selectOne").value;
        const difficulty = document.getElementById("selectTwo").value;
        const theme = document.getElementById("selectThree").value;

        if(!cardCount || !difficulty || !theme) {
            alert("Por favor, preencha todos os campos para iniciar o jogo do balacobaco!");
            return;
        } else {
           localStorage.setItem('cardCount', cardCount);
        localStorage.setItem('difficulty', difficulty);
        localStorage.setItem('theme', theme);

        window.location.href = 'game.html'; 
        }
    }

    document.getElementById('userActions').addEventListener('change', function () {
        if(this.value === 'logout') {
            alert("Você saiu da sua conta :(");

            window.location.href = 'index.html';
        }
    });