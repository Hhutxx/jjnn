const images = [
    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg",
    "img/slide4.jpg",
    "img/slide5.jpg"
];

let currentSlideIndex = 0;

const imageElement = document.getElementById("gallery-image");
const slideInfoElement = document.getElementById("slide-info");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateGallery() {
    imageElement.src = images[currentSlideIndex];
    slideInfoElement.textContent = `${currentSlideIndex + 1} слайд из ${images.length}`;
    prevButton.disabled = currentSlideIndex === 0;
    nextButton.disabled = currentSlideIndex === images.length - 1;
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
