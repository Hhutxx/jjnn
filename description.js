document.addEventListener('DOMContentLoaded', function() {

    const login = localStorage.getItem('login');


    if (login) {
        document.getElementById('login-display').innerText = `Логин: ${login}`;
    } else {
        document.getElementById('login-display').innerText = 'Логин: Неизвестно';
    }


    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function() {
        localStorage.clear();
        window.location.href = 'index.html'; 
    });
});
