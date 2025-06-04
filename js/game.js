
    // Referência aos elementos HTML usados no jogo
const cardsPart = document.getElementById("cardsPart");
const attemptsDisplay = document.getElementById("attempts");
const correctPairsDisplay = document.getElementById("correctPairs");
const totalPairsDisplay = document.getElementById("totalPairs");
const timerDisplay = document.getElementById("timer");

// Recupera configurações salvas no localStorage ou usa valores padrão
let cardCount = parseInt(localStorage.getItem("cardCount")) || 8;
let difficulty = localStorage.getItem("difficulty") || "easy";
let theme = localStorage.getItem("theme") || "light";


// Variáveis de controle do jogo
let flippedCards = [];         // Armazena as cartas viradas no momento
let matchedCards = 0;          // Número de pares corretos encontrados
let attempts = 0;              // Número de tentativas
let startTime;                 // Hora em que o jogo começou
let timerInterval;             // Referência ao intervalo do timer


// Gera todas as cartas do jogo com pares embaralhados
function generateCards() {
  const pairs = cardCount / 2;                    // Número de pares (2 cartas iguais)
  totalPairsDisplay.textContent = pairs;          // Atualiza o texto com total de pares
  const values = [];

  // Adiciona dois de cada valor no array
  for (let i = 1; i <= pairs; i++) {
    values.push(i);
    values.push(i);
  }

  shuffle(values);  // Embaralha os valores

  // Cria cada carta visualmente
  values.forEach((value) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;     // Salva o valor da carta no atributo "data-value"
    card.innerHTML = `<div class="front"></div><div class="back">${value}</div>`;
    card.addEventListener("click", handleCardClick); // Escuta o clique na carta
    cardsPart.appendChild(card);   // Adiciona carta no DOM
  });
}

// Embaralha um array (algoritmo Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Lida com o clique na carta
function handleCardClick(e) {
  const card = e.currentTarget;

  // Impede virar mais de 2 cartas ou revirar a mesma carta
  if (flippedCards.length >= 2 || card.classList.contains("flipped")) return;

  card.classList.add("flipped");     // Mostra a carta
  flippedCards.push(card);          // Adiciona ao array de cartas viradas

  if (flippedCards.length === 2) {
    attempts++;                              // Aumenta tentativas
    attemptsDisplay.textContent = attempts; // Atualiza no HTML

    const [first, second] = flippedCards;

    // Verifica se os valores das cartas são iguais
    if (first.dataset.value === second.dataset.value) {
      matchedCards++;                         // Mais um par correto
      correctPairsDisplay.textContent = matchedCards;

      // Adiciona classe de "matched" nas duas cartas
      first.classList.add("matched");
      second.classList.add("matched");

      flippedCards = [];                      // Limpa array

      // Se todos os pares foram encontrados, mostra o modal de vitória
      if (matchedCards === cardCount / 2) {
        setTimeout(showWinModal, 500);        // Espera um pouco antes de mostrar
      }
    } else {
      // Se não forem iguais, desvira as cartas após um tempo
      first.classList.add("incorrect");
      second.classList.add("incorrect");

      setTimeout(() => {
        first.classList.remove("flipped", "incorrect");
        second.classList.remove("flipped", "incorrect");
        flippedCards = [];
      }, difficulty === "difficult" ? 500 : 1000);  // Tempo varia pela dificuldade
    }
  }
}
   const lightBtn = document.getElementById('lightTheme');
  const darkBtn = document.getElementById('darkTheme');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  function swapImage(imgElement, newSrc) {
    imgElement.classList.add('fade-out');

    setTimeout(() => {
      imgElement.src = newSrc;
      imgElement.classList.remove('fade-out');
    }, 300); // Duração da transição no CSS
  }

  lightBtn.addEventListener('click', () => {
    swapImage(sunIcon, '../assets/images/sunSelected.png');
    swapImage(moonIcon, '../assets/images/moonSelected.png');

    lightBtn.classList.add('selected');
    darkBtn.classList.remove('selected');
    document.body.classList.remove('dark-theme');
  });

  darkBtn.addEventListener('click', () => {
    swapImage(sunIcon, '../assets/images/sunUnselect.png');
    swapImage(moonIcon, '../assets/images/moonUnselect.png');

    darkBtn.classList.add('selected');
    lightBtn.classList.remove('selected');
    document.body.classList.add('dark-theme');
  });

  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    darkBtn.classList.add('selected');
    lightBtn.classList.remove('selected');
    sunIcon.src = '../assets/images/sunUnselect.png';
    moonIcon.src = '../assets/images/moonUnselect.png';
  }


function showWinModal() {
  clearInterval(timerInterval);  // Para o cronômetro
  document.getElementById("finalAttempts").textContent = attempts;
  document.getElementById("finalTime").textContent = timerDisplay.textContent;
  document.getElementById("winModal").classList.add("active");  // Exibe o modal
}

// Inicia o cronômetro
function startTimer() {
  if (difficulty === "difficult") {
    let timeLeft = 60;
    timerDisplay.textContent = "01:00";

    timerInterval = setInterval(() => {
      timeLeft--;

      const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
      const seconds = String(timeLeft % 60).padStart(2, "0");
      timerDisplay.textContent = `${minutes}:${seconds}`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        // Mostra o modal de derrota
        document.getElementById("loseModal").classList.add("active");
        // Evita que o jogador continue clicando
        document.querySelectorAll(".card").forEach(card => {
          card.removeEventListener("click", handleCardClick);
        });
      }
    }, 1000);

  } else {
    // Timer normal (contando para cima)
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
      const seconds = String(elapsed % 60).padStart(2, "0");
      timerDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);
  }
}


    // Aplica o tema escolhido
generateCards();       // Cria as cartas
startTimer();          // Inicia o cronômetro

