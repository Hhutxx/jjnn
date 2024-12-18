function showDefinition(word) {
    const definitions = {
        "Пуаро": "Бельгийский детектив, главный герой романа.",
        "Восточный экспресс": "Легендарный поезд, где разворачиваются события.",
        "Рэтчетт": "Жертва убийства, американский бизнесмен.",
        "Бук": "Друг Пуаро и управляющий компанией поездов.",
        "Графиня Андрени": "Изящная пассажирка с тайной связью с жертвой.",
        "Мисс Дебенхэм": "Учительница, скрывающая важные факты.",
        "Арбатнот": "Британский полковник с твердыми принципами.",
        "Кондуктор": "Работник поезда, присутствующий при событиях.",
        "Хардмен": "Частный детектив, связанный с Рэтчеттом.",
        "Губта": "Врач, помогающий Пуаро с осмотром тела."
    };
    

    const definitionElement = document.getElementById('word-definition');
    definitionElement.textContent = definitions[word] || 'Определение не найдено.';
}

function searchWords() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const wordList = document.getElementById('wordList');
    const words = wordList.getElementsByTagName('li');

    for (let i = 0; i < words.length; i++) {
        const wordText = words[i].textContent.toLowerCase();
        if (wordText.includes(searchInput)) {
            words[i].style.display = 'block'; // Показываем слово, если оно соответствует запросу
        } else {
            words[i].style.display = 'none'; // Скрываем слово, если оно не соответствует запросу
        }
    }
}

function resetSearch() {
    document.getElementById('searchInput').value = ''; // Очистка поля поиска
    const wordList = document.getElementById('wordList');
    const words = wordList.getElementsByTagName('li');

    for (let i = 0; i < words.length; i++) {
        words[i].style.display = 'block'; // Показываем все слова после сброса
    }
}

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
