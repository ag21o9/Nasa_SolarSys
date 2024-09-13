// Questions array with objects for each question
const questions = [
    {
      question: "Which is the largest planet in our Solar System?",
      options: ["Mars", "Earth", "Jupiter", "Saturn"],
      answer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mercury", "Venus", "Mars", "Neptune"],
      answer: 2
    },
    {
      question: "Which planet has the most extensive ring system?",
      options: ["Earth", "Jupiter", "Saturn", "Uranus"],
      answer: 2
    },
    {
      question: "Which is the closest planet to the Sun?",
      options: ["Venus", "Mars", "Mercury", "Neptune"],
      answer: 2
    }
  ];
  
  // Variables to track the quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  
  // DOM elements
  const questionText = document.getElementById('question-text');
  const optionButtons = document.querySelectorAll('.option-btn');
  const scoreText = document.getElementById('score');
  const nextButton = document.getElementById('next-question-btn');
  
  // Load the first question
  loadQuestion();
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      button.classList.remove('correct', 'incorrect');
      button.disabled = false;
    });
    nextButton.style.display = 'none';
  }
  
  // Handle answer selection
  function selectAnswer(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (optionIndex === currentQuestion.answer) {
      optionButtons[optionIndex].classList.add('correct');
      score++;
      scoreText.textContent = score;
    } else {
      optionButtons[optionIndex].classList.add('incorrect');
      optionButtons[currentQuestion.answer].classList.add('correct');
    }
    optionButtons.forEach(button => button.disabled = true);
    nextButton.style.display = 'inline-block';
  }
  
  // Load the next question or end the quiz
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  // End the quiz
  function endQuiz() {
    questionText.textContent = `Quiz Over! Your final score is ${score}/${questions.length}.`;
    optionButtons.forEach(button => button.style.display = 'none');
    nextButton.style.display = 'none';
  }
  