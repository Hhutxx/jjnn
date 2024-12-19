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
        event.preventDefault(); // Останавливаем стандартное поведение

        const formData = new FormData(testForm);
        let score = 0;
        let totalQuestions = 0;

        // Проверяем ответы
        for (const question in correctAnswers) {
            const userAnswer = formData.get(question); // Получаем ответ пользователя
            const correctAnswer = correctAnswers[question];
            const resultElement = document.getElementById(`result-${question}`);
            
            if (!resultElement) continue;

            // Учитываем только заполненные поля
            if (userAnswer) {
                totalQuestions++;
                if (String(userAnswer).trim().toLowerCase() === String(correctAnswer).toLowerCase()) {
                    resultElement.textContent = "Правильно!";
                    resultElement.style.color = "green";
                    score++;
                } else {
                    resultElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}`;
                    resultElement.style.color = "red";
                }
            } else {
                resultElement.textContent = "";
            }
        }

        // Отображаем результат
        finalResult.textContent = `Ваш результат: ${score} из ${totalQuestions}`;
        localStorage.setItem("testResult", `Ваш результат: ${score} из ${totalQuestions}`);
        restartButton.style.display = "inline-block"; // Показываем кнопку "Пройти тест снова"
    });

    // Логика кнопки "Пройти тест снова"
    restartButton.addEventListener("click", function () {
        testForm.reset();
        document.querySelectorAll(".result").forEach((el) => (el.textContent = ""));
        finalResult.textContent = "";
        restartButton.style.display = "none";
    });

    // Отображение логина
    const username = localStorage.getItem("login");
    document.getElementById("login-display").innerText = `Логин: ${username || "Неизвестно"}`;

    // Логика кнопки "Выйти"
    const logoutButton = document.getElementById("logout-btn");
    logoutButton.addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "index.html";
    });
});
