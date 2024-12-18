document.addEventListener('DOMContentLoaded', function() {
    // Ограничиваем максимальную дату для выбора
    const today = new Date();  
    const dateHtml = today.toISOString().slice(0, 10);  
    document.getElementById('date').setAttribute('max', dateHtml);

    // Обрабатываем отправку формы
    const authForm = document.getElementById('auth_form');
    authForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Проверяем, если форма валидна
        if (authForm.checkValidity()) {
            // Получаем значения из формы
            const login = document.getElementById('login').value;
            const dateOfBirth = document.getElementById('date').value;
            const gender = document.querySelector('input[type="radio"]:checked').value;

            // Сохраняем данные в localStorage
            localStorage.setItem('login', login);
            localStorage.setItem('dateOfBirth', dateOfBirth);
            localStorage.setItem('gender', gender);

            // Перенаправляем на страницу личного кабинета
            window.location.href = 'description.html';
        } else {
            alert('Пожалуйста, заполните все поля формы!');
        }
    });
});
