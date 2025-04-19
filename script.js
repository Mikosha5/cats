const modal = document.getElementById("myModal");
const btn = document.querySelector(".open-modal-button");
const span = document.querySelector(".close");

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Меню для мобильных
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Слайдер
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;

    // Создание точек
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dots span');
    dots[0].classList.add('active');

    function goToSlide(index) {
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        dots[currentSlide].classList.remove('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    setInterval(nextSlide, 5000); // Смена слайда каждые 5 секунд
});

        
const themeButton = document.getElementById('themeSwitcher');
const themeLink = document.getElementById('theme-link');
 let currentTheme = 'style.css'; 

themeButton.addEventListener('click', () =>{
 if(currentTheme === 'style.css'){
     themeLink.href = "style2.css";
      currentTheme = 'style2.css';
 } else{
    themeLink.href = "style.css";
    currentTheme = 'style.css';
 }

});
