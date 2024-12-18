document.addEventListener('DOMContentLoaded', function() {

    const username = localStorage.getItem("login");
    const birthdate = localStorage.getItem("dateOfBirth");
    const gender = localStorage.getItem("gender");
    const testResult = localStorage.getItem("testResult");


    let formattedBirthdate = birthdate ? new Date(birthdate).toLocaleDateString("ru-RU") : "Неизвестно";


    let formattedGender = "";
    if (gender === "male") {
        formattedGender = "Мужской";
    } else if (gender === "female") {
        formattedGender = "Женский";
    } else {
        formattedGender = "Неизвестно";
    }


    document.getElementById("user-info").innerHTML = `
        <p>Логин: ${username || "Неизвестно"}</p>
        <p>Дата рождения: ${formattedBirthdate}</p>
        <p>Пол: ${formattedGender}</p>
        <p>Результат теста: ${testResult || "Тест еще не пройден"}</p>
    `;


    document.getElementById("login-display").innerText = `Логин: ${username || "Неизвестно"}`;


    document.getElementById("logout").addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "index.html"; 
    });


    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function() {
        localStorage.clear();
        window.location.href = 'index.html'; 
    });
});
