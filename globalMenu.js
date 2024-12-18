// Автоматическое выделение активного пункта меню
const menuItems = document.querySelectorAll(".menu-item");
const currentPage = window.location.pathname.split("/").pop();

menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPage) {
        item.classList.add("active");
    } else {
        item.classList.remove("active");
    }
});