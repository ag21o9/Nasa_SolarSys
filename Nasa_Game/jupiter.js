const questions = [
    {
      question: "How many moons does Jupiter have?",
      options: ["79", "12", "62", "40"],
      answer: 0
    },
    {
      question: "What is Jupiter's most famous feature?",
      options: ["Its rings", "The Great Red Spot", "Its large moons", "Its fast rotation"],
      answer: 1
    },
    {
      question: "Which gas is most prevalent in Jupiter's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
      answer: 2
    },
    {
      question: "Jupiter is known as the?",
      options: ["Smallest planet", "Largest planet", "Third planet", "Hottest planet"],
      answer: 1
    },
    {
      question: "How long does it take Jupiter to complete one orbit around the Sun?",
      options: ["12 Earth years", "1 Earth year", "6 Earth months", "20 Earth years"],
      answer: 0
    }
  ];
  let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionButtons = document.querySelectorAll('.option-btn');
const scoreText = document.getElementById('score');
const nextButton = document.getElementById('next-question-btn');

loadQuestion();

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionButtons.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.classList.remove('correct', 'incorrect');
    button.style.backgroundColor = ''; // Reset button colors
    button.disabled = false;
  });
  nextButton.style.display = 'none';
}

function selectAnswer(optionIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  
  if (optionIndex === currentQuestion.answer) {
    optionButtons[optionIndex].classList.add('correct');
    optionButtons[optionIndex].style.backgroundColor = 'green'; // Correct answer turns green
    
    score++;
    scoreText.textContent = score;
  } else {
    optionButtons[optionIndex].classList.add('incorrect');
    optionButtons[optionIndex].style.backgroundColor = 'red'; // Incorrect answer turns red
    optionButtons[currentQuestion.answer].classList.add('correct');
    optionButtons[currentQuestion.answer].style.backgroundColor = 'green'; // Correct answer still turns green
  }
  
  optionButtons.forEach(button => button.disabled = true);
  nextButton.style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionText.textContent = `Quiz Over! Your final score is ${score}/${questions.length}.`;
  optionButtons.forEach(button => button.style.display = 'none');
  nextButton.style.display = 'none';
}
