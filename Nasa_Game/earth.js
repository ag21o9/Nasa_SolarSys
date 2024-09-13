const questions = [
  {
    question: "What is the Earth's atmosphere mainly composed of?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 2
  },
  {
    question: "How old is the Earth approximately?",
    options: ["3 billion years", "4.5 billion years", "10 billion years", "2 billion years"],
    answer: 1
  },
  {
    question: "What is the Earth's largest ocean?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: 2
  },
  {
    question: "What is the circumference of the Earth?",
    options: ["40,075 km", "50,000 km", "30,000 km", "60,000 km"],
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
