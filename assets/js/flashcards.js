import questions from './questions.js';

document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.getElementById('flashcard');
    const questionDiv = flashcard.querySelector('.question');
    const answerDiv = flashcard.querySelector('.answer');
    const nextButton = document.getElementById('next-question');
    const newQuestionsCheckbox = document.getElementById('new-questions');

    let currentQuestionIndex = 0;
    let allQuestions = questions.questions;

    function filterQuestions() {
        if (newQuestionsCheckbox.checked) {
            allQuestions = questions.getNewQuestions();
        } else {
            allQuestions = questions.questions;
        }
        currentQuestionIndex = 0; // Reset to the first question after filtering
    }

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

    newQuestionsCheckbox.addEventListener('change', () => {
        filterQuestions();
        showQuestion(); // Show the first question after filtering
    });

    filterQuestions(); // Initialize questions
    showQuestion(); // Initial question display
});
