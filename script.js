// Seleção dos elementos
const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const resetBtn = document.getElementById('reset-btn');
const computerChoiceImg = document.getElementById('computer-choice-img');

// Mapeamento das imagens
const choiceImages = {
  pedra: 'images/imagespedra.png.jpeg',
  papel: 'images/imagespapel.png.jpeg',
  tesoura: 'images/imagestesoura.png.jpeg',
  default: 'images/imagespedra.png.jpeg',
};

// Opções possíveis
const choicesArray = ['pedra', 'papel', 'tesoura'];

// Função para o computador escolher
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// Função para determinar o vencedor
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Empate!';
  }
  if (
    (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
    (playerChoice === 'papel' && computerChoice === 'pedra') ||
    (playerChoice === 'tesoura' && computerChoice === 'papel')
  ) {
    return 'Você venceu!';
  }
  return 'Você perdeu!';
}

// Evento de clique nas escolhas
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Atualizar resultado
    resultText.textContent = `Você escolheu ${playerChoice}. O computador escolheu ${computerChoice}. ${result}`;

    // Atualizar imagem do computador
    computerChoiceImg.src = choiceImages[computerChoice];
  });
});

// Evento para o botão de reiniciar
resetBtn.addEventListener('click', () => {
  resultText.textContent = 'Escolha uma opção para jogar!';
  computerChoiceImg.src = choiceImages.default;
});
