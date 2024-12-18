const correctAnswers = {
    question1: "Эркюль Пуаро",
    question2: "Рэтчетт",
    question3: "Нож",
    question4: "12",
    question5: "Зависть",
    question6: "Восточный экспресс"
};

document.getElementById("test-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let score = 0;


    for (const [question, userAnswer] of formData.entries()) {
        const correctAnswer = correctAnswers[question];
        const resultElement = document.getElementById(`result-${question}`);
        
        if (String(userAnswer).trim().toLowerCase() === String(correctAnswer).toLowerCase()) {
            resultElement.textContent = "Правильно!";
            resultElement.style.color = "green";
            score++;
        } else {
            resultElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}`;
            resultElement.style.color = "red";
        }
    }


    const finalResult = document.getElementById("final-result");
    finalResult.textContent = `Ваш результат: ${score} из 6`;


    localStorage.setItem("testResult", `Ваш результат: ${score} из 6`);


    const restartButton = document.getElementById("restart-btn");
    restartButton.style.display = "inline-block";  
});


document.addEventListener('DOMContentLoaded', function() {

    const username = localStorage.getItem("login");


    document.getElementById("login-display").innerText = `Логин: ${username || "Неизвестно"}`;

    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function() {
        localStorage.clear();
        window.location.href = 'index.html'; 
    });
});
