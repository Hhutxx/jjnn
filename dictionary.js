function showDefinition(word) {
    const definitions = {
        "Пуаро": "Пуаро - бельгийский детектив, главный герой романа.",
        "Восточный экспресс": "Восточный экспресс - легендарный поезд, где разворачиваются события.",
        "Рэтчетт": "Рэтчетт - жертва убийства, американский бизнесмен.",
        "Бук": "Бук - друг Пуаро и управляющий компанией поездов.",
        "Графиня Андрени": "Графиня Андрени - изящная пассажирка с тайной связью с жертвой.",
        "Мисс Дебенхэм": "Мисс Дебенхэм - учительница, скрывающая важные факты.",
        "Арбатнот": "Арбатнот - британский полковник с твердыми принципами.",
        "Кондуктор": "Кондуктор - работник поезда, присутствующий при событиях.",
        "Хардмен": "Хардмен - частный детектив, связанный с Рэтчеттом.",
        "Губта": "Губта - врач, помогающий Пуаро с осмотром тела."
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
            words[i].style.display = 'block'; 
        } else {
            words[i].style.display = 'none'; 
        }
    }
}

function resetSearch() {
    document.getElementById('searchInput').value = ''; 
    const wordList = document.getElementById('wordList');
    const words = wordList.getElementsByTagName('li');

    for (let i = 0; i < words.length; i++) {
        words[i].style.display = 'block'; 
    }
}

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
