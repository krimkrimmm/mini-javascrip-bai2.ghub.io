const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [3, 4, 5, 6],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

function renderQuizzes() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = "";
    
    quizes.forEach(quiz => {
        const quizItem = document.createElement("div");
        quizItem.classList.add("quiz-item");
        
        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `Câu ${quiz.id} : ${quiz.question}`;
        quizItem.appendChild(questionTitle);
        
        const quizAnswer = document.createElement("div");
        quizAnswer.classList.add("quiz-answer");
        
        quiz.answers.forEach(answer => {
            const answerItem = document.createElement("div");
            answerItem.classList.add("quiz-answer-item");
            
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `quiz-${quiz.id}`;
            input.value = answer;
            
            const label = document.createElement("label");
            label.textContent = answer;
            
            answerItem.appendChild(input);
            answerItem.appendChild(label);
            quizAnswer.appendChild(answerItem);
        });
        
        quizItem.appendChild(quizAnswer);
        quizContainer.appendChild(quizItem);
    });
}

document.getElementById("btn").addEventListener("click", () => {
    quizes.forEach(quiz => {
        const answers = document.getElementsByName(`quiz-${quiz.id}`);
        const randomIndex = Math.floor(Math.random() * answers.length);
        answers[randomIndex].checked = true;
    });
});

// Render quizzes on page load
document.addEventListener("DOMContentLoaded", renderQuizzes);