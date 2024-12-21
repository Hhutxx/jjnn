const correctAnswers = {
    question1: "Эркюль Пуаро",
    question2: "Рэтчетт",
    question3: "Нож",
    question4: "12",
    question5: "Зависть",
    question6: "Поезд"
};

document.addEventListener("DOMContentLoaded", function () {
    const testForm = document.getElementById("test-form");
    const finalResult = document.getElementById("final-result");
    const restartButton = document.getElementById("restart-btn");

    testForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const formData = new FormData(testForm);
        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;


        for (const question in correctAnswers) {
            const userAnswer = formData.get(question); 
            const correctAnswer = correctAnswers[question];
            const resultElement = document.getElementById(`result-${question}`);
            
            if (!resultElement) continue;

            if (userAnswer) {
                if (String(userAnswer).trim().toLowerCase() === String(correctAnswer).toLowerCase()) {
                    resultElement.textContent = "Правильно!";
                    resultElement.style.color = "green";
                    score++;
                } else {
                    resultElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}`;
                    resultElement.style.color = "red";
                }
            } else {
                resultElement.textContent = `Не заполнено. Правильный ответ: ${correctAnswer}`;
                resultElement.style.color = "red";
            }
        }


        finalResult.textContent = `Ваш результат: ${score} из ${totalQuestions}`;
        localStorage.setItem("testResult", `Ваш результат: ${score} из ${totalQuestions}`);
        restartButton.style.display = "inline-block"; 
    });

    restartButton.addEventListener("click", function () {
        testForm.reset();
        document.querySelectorAll(".result").forEach((el) => (el.textContent = ""));
        finalResult.textContent = "";
        restartButton.style.display = "none";
    });

    const username = localStorage.getItem("login");
    document.getElementById("login-display").innerText = `Логин: ${username || "Неизвестно"}`;

    const logoutButton = document.getElementById("logout-btn");
    logoutButton.addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "index.html"; 
    });
});
