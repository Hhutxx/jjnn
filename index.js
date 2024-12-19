document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const dateHtml = today.toISOString().slice(0, 10);
    document.getElementById('date').setAttribute('max', dateHtml);

    const authForm = document.getElementById('auth_form');
    const errorMessage = document.getElementById('error-message');

    authForm.addEventListener('submit', function (event) {

        event.preventDefault();

        if (!authForm.checkValidity()) {
            errorMessage.style.display = 'block'; 
            return;
        }


        errorMessage.style.display = 'none';


        const login = document.getElementById('login').value;
        const dateOfBirth = document.getElementById('date').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        localStorage.setItem('login', login);
        localStorage.setItem('dateOfBirth', dateOfBirth);
        localStorage.setItem('gender', gender);


        window.location.href = 'description.html';
    });
});
