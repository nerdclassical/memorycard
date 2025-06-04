# 🧠 MemoryCard

MemoryCard é um site interativo criado por mim e meu colega com foco em jogos de memória. Utilizamos **HTML**, **CSS** e **JavaScript**, com manipulação direta do **DOM**, para criar uma experiência dinâmica onde o usuário pode treinar sua mente enquanto se diverte!

---

## 🌐 Funcionalidades

- Autenticação com páginas de **Login** e **Registro**
- Tela de **Menu** com acesso a:
  - Criar Jogo
  - Ver Ranking
  - Ver Tutorial
- Sistema de criação de partidas com:
  - Escolha da quantidade de cartas (8, 12 ou 16)
  - Nível de dificuldade (Fácil ou Difícil)
  - Tema do site (Claro ou Escuro)
- Página de **Tutorial** explicando como jogar
- Página de **Ranking** com os resultados
- **Página do jogo** com lógica de acerto de pares
  - No modo difícil, há **temporizador** e possibilidade de derrota
  - Em caso de vitória, uma **tela de sucesso** é exibida

---

## 📁 Estrutura de páginas

- `index.html` – Página inicial com botões de **Login** e **Register**
- `login.html` – Formulário para fazer login
- `cadastro.html` – Formulário para registrar um novo usuário
- `menu.html` – Tela principal após login, com opções do sistema
- `tutorial.html` – Explicação visual e textual de como funciona o jogo
- `ranking.html` – Exibe os resultados e pontuações
- `configuration.html` – Configuração de novo jogo com personalizações
- `game.html` – Local onde o jogo acontece de fato, com lógica de vitória/derrota

---

## 📁 Organização dos arquivos

/memorycard<br>
├── assets/<br>
│   └── images/<br>
│       ├── bxs--down-arrow.png<br>
│       ├── fundo_login.png<br>
│       ├── fundo_register.png<br>
│       ├── login_image.png<br>
│       ├── logo.jpeg<br>
│       ├── moonSelected.png<br>
│       ├── moonUnselect.png<br>
│       ├── register_image.png<br>
│       ├── sunSelected.png<br>
│       ├── sunUnselect.png<br>
│       └── upscalemedia-transformed.png<br>
├── css/<br>
│   ├── index.css<br>
│   ├── login.css<br>
│   ├── cadastro.css<br>
│   ├── menu.css<br>
│   ├── tutorial.css<br>
│   ├── ranking.css<br>
│   ├── configuration.css<br>
│   └── game.css<br>
├── js/<br>
│   ├── index.js<br>
│   ├── login.js<br>
│   ├── cadastro.js<br>
│   ├── menu.js<br>
│   ├── tutorial.js<br>
│   ├── ranking.js<br>
│   ├── configuration.js<br>
│   └── game.js<br>
├── index.html<br>
├── login.html<br>
├── cadastro.html<br>
├── menu.html<br>
├── tutorial.html<br>
├── ranking.html<br>
├── configuration.html<br>
└── game.html<br>

---

## 🛠 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript Puro (vanilla JS)
- Manipulação de DOM
- Lógica de jogo baseada em tempo e pares de cartas

---

## 🎮 Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/nerdclassical/memorycard.git
