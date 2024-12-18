document.addEventListener('DOMContentLoaded', function() {
    // Получаем логин из localStorage
    const login = localStorage.getItem('login');

    // Если логин есть, отображаем его
    if (login) {
        document.getElementById('login-display').innerText = `Логин: ${login}`;
    } else {
        document.getElementById('login-display').innerText = 'Логин: Неизвестно';
    }

    // Обработчик для выхода
    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function() {
        localStorage.clear();
        window.location.href = 'index.html'; // Перенаправление на главную страницу
    });
});
