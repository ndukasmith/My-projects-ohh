document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next');
    const restartButton = document.getElementById('restart');
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    const questions = [
    {
    question: "What is the capital of France?",
    options: ["New York", "London", "Paris", "Tokyo"],
    answer: "Paris"
    },
    // Add more questions as needed
    ];
    
    function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => selectOption(option));
    optionsElement.appendChild(button);
    });
    }
    
    function selectOption(option) {
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
    score++;
    resultElement.textContent = 'Correct!';
    } else {
    resultElement.textContent = 'Wrong!';
    }
    nextButton.style.display = 'block';
    }
    
    nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
    displayQuestion();
    nextButton.style.display = 'none';
    resultElement.textContent = '';
    } else {
    showResults();
    }
    });
    
    restartButton.addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    displayQuestion();
    nextButton.style.display = 'none';
    restartButton.style.display = 'none';
    resultElement.textContent = '';
    });
    
    function showResults() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    resultElement.textContent = `Your score is ${score}/${questions.length}`;
    restartButton.style.display = 'block';
    }
    
    displayQuestion();
    });