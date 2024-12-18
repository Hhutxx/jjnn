document.addEventListener('DOMContentLoaded', function() {
    // Получаем данные из localStorage
    const username = localStorage.getItem("login");
    const birthdate = localStorage.getItem("dateOfBirth");
    const gender = localStorage.getItem("gender");
    const testResult = localStorage.getItem("testResult");

    // Преобразуем дату рождения в удобный формат
    let formattedBirthdate = birthdate ? new Date(birthdate).toLocaleDateString("ru-RU") : "Неизвестно";

    // Перевод пола на русский
    let formattedGender = "";
    if (gender === "male") {
        formattedGender = "Мужской";
    } else if (gender === "female") {
        formattedGender = "Женский";
    } else {
        formattedGender = "Неизвестно";
    }

    // Отображаем информацию о пользователе
    document.getElementById("user-info").innerHTML = `
        <p>Логин: ${username || "Неизвестно"}</p>
        <p>Дата рождения: ${formattedBirthdate}</p>
        <p>Пол: ${formattedGender}</p>
        <p>Результат теста: ${testResult || "Тест еще не пройден"}</p>
    `;

    // Отображаем логин в красном цвете
    document.getElementById("login-display").innerText = `Логин: ${username || "Неизвестно"}`;

    // Обработчик для выхода
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "index.html"; // Перенаправление на главную страницу
    });

    // Обработчик для выхода из личного кабинета
    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function() {
        localStorage.clear();
        window.location.href = 'index.html'; // Перенаправление на главную страницу
    });
});
