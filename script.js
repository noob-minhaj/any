let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;
    
    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function autoSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

setInterval(autoSlide, 2000); // Change slide every 3 seconds

// Initialize first slide
showSlide(currentSlide);
