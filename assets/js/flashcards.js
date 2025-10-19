import questions from './questions.js';

document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.getElementById('flashcard');
    const questionDiv = flashcard.querySelector('.question');
    const answerDiv = flashcard.querySelector('.answer');
    const nextButton = document.getElementById('next-question');

    let currentQuestionIndex = 0;
    let allQuestions = questions.questions;

    function showQuestion() {
        answerDiv.classList.add('hidden');
        questionDiv.textContent = allQuestions[currentQuestionIndex].question;
        answerDiv.textContent = 'Answers: ' + allQuestions[currentQuestionIndex].answers.join(', ');
    }

    function nextQuestion() {
        currentQuestionIndex = (currentQuestionIndex + 1) % allQuestions.length;
        showQuestion();
    }

    flashcard.addEventListener('click', () => {
        answerDiv.classList.toggle('hidden');
    });

    nextButton.addEventListener('click', nextQuestion);

    showQuestion(); // Initial question display
});
