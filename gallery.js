const images = [
    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg",
    "img/slide4.jpg",
    "img/slide5.jpg"
];

const captions = [
    "Обложка",
    "Красивая картинка",
    "Сцена раследования",
    "Основные персонажи",
    "Просто картинка"
];

let currentSlideIndex = 0;

const imageElement = document.getElementById("gallery-image");
const slideInfoElement = document.getElementById("slide-info");
const captionElement = document.getElementById("slide-caption");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateGallery() {
    // Добавляем анимацию исчезновения
    imageElement.classList.add("fade-out");

    // Ожидаем завершения анимации исчезновения
    setTimeout(() => {
        imageElement.src = images[currentSlideIndex];
        captionElement.textContent = captions[currentSlideIndex];
        slideInfoElement.textContent = `${currentSlideIndex + 1} слайд из ${images.length}`;

        // Отключаем кнопки, если это первый или последний слайд
        prevButton.disabled = currentSlideIndex === 0;
        nextButton.disabled = currentSlideIndex === images.length - 1;

        // Убираем анимацию исчезновения и добавляем анимацию появления
        imageElement.classList.remove("fade-out");
        imageElement.classList.add("fade-in");

        // Убираем класс fade-in после завершения анимации
        setTimeout(() => {
            imageElement.classList.remove("fade-in");
        }, 500); // Время анимации совпадает с CSS (0.5s)
    }, 500); // Время анимации совпадает с CSS (0.5s)
}

prevButton.addEventListener("click", () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateGallery();
    }
});

nextButton.addEventListener("click", () => {
    if (currentSlideIndex < images.length - 1) {
        currentSlideIndex++;
        updateGallery();
    }
});

updateGallery();

document.addEventListener('DOMContentLoaded', function () {
    const login = localStorage.getItem('login');

    if (login) {
        document.getElementById('login-display').innerText = `Логин: ${login}`;
    } else {
        document.getElementById('login-display').innerText = 'Логин: Неизвестно';
    }

    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function () {
        localStorage.clear();
        window.location.href = 'index.html';
    });
});
