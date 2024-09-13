const questions = [
    {
      question: "What is Mars often referred to as?",
      options: ["The Blue Planet", "The Red Planet", "The Green Planet", "The Yellow Planet"],
      answer: 1
    },
    {
      question: "Which of these mountains is located on Mars?",
      options: ["Olympus Mons", "Mount Everest", "Mount Kilimanjaro", "Mount Fuji"],
      answer: 0
    },
    {
      question: "How many moons does Mars have?",
      options: ["1", "2", "4", "6"],
      answer: 1
    },
    {
      question: "What is Mars' atmosphere primarily composed of?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: 1
    },
    {
      question: "What is the average surface temperature of Mars?",
      options: ["-80 degrees Fahrenheit", "0 degrees Fahrenheit", "100 degrees Fahrenheit", "200 degrees Fahrenheit"],
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
