document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('button.prev');
    const nextButton = document.querySelector('button.next');
    const pauseButton = document.querySelector('button.pause');
    const rows = document.querySelectorAll('#componentTable tbody tr');

    let currentIndex = 0;
    let autoPlayInterval;
    let isPaused = false;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
        rows.forEach((row, index) => {
            row.classList.toggle('highlight', index === currentIndex);
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    function toggleAutoPlay() {
        if (isPaused) {
            autoPlayInterval = setInterval(showNextImage, 3000);
            pauseButton.innerHTML = '⏸'; // Icono de pausa
        } else {
            clearInterval(autoPlayInterval);
            pauseButton.innerHTML = '▶️'; // Icono de play
        }
        isPaused = !isPaused;
    }

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
    pauseButton.addEventListener('click', toggleAutoPlay);

    // Auto-play functionality
    autoPlayInterval = setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos

    updateCarousel();
});
