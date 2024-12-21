document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const dateHtml = today.toISOString().slice(0, 10);
    document.getElementById('date').setAttribute('max', dateHtml);

    const authForm = document.getElementById('auth_form');
    const loginError = document.getElementById('login-error');
    const dateError = document.getElementById('date-error');
    const genderError = document.getElementById('gender-error');

    authForm.addEventListener('submit', function (event) {
        event.preventDefault();


        loginError.style.display = 'none';
        dateError.style.display = 'none';
        genderError.style.display = 'none';


        const login = document.getElementById('login').value.trim();
        const dateOfBirth = document.getElementById('date').value;
        const gender = document.querySelector('input[name="gender"]:checked');

        let valid = true;


        if (!/^[а-яА-ЯёЁ0-9]{4,10}$/.test(login)) {
            loginError.style.display = 'block';
            valid = false;
        }


        if (!dateOfBirth) {
            dateError.style.display = 'block';
            valid = false;
        }


        if (!gender) {
            genderError.style.display = 'block';
            valid = false;
        }

        if (!valid) {
            return; 
        }


        localStorage.setItem('login', login);
        localStorage.setItem('dateOfBirth', dateOfBirth);
        localStorage.setItem('gender', gender.value);


        window.location.href = 'description.html';
    });
});
