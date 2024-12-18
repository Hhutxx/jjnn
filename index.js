document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const dateHtml = today.toISOString().slice(0, 10);
    document.getElementById('date').setAttribute('max', dateHtml);

    const authForm = document.getElementById('auth_form');
    authForm.addEventListener('submit', function(event) {
        if (!authForm.checkValidity()) {
            event.preventDefault();
            alert('Пожалуйста, заполните все поля формы корректно!');
            return;
        }

        event.preventDefault();

        const login = document.getElementById('login').value;
        const dateOfBirth = document.getElementById('date').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        localStorage.setItem('login', login);
        localStorage.setItem('dateOfBirth', dateOfBirth);
        localStorage.setItem('gender', gender);

        window.location.href = 'description.html';
    });
});

