/**
 * Effects.js - Lógica del Slider Circular del Parcial
 * Maneja el movimiento automático y suave de las imágenes del parcial resuelto.
 */

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carousel');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Función para cambiar de imagen
    const moveSlider = () => {
        currentIndex++;

        // Si llegamos al final, volvemos al inicio con un efecto fluido
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        const percentage = currentIndex * -50; // Desplazamiento basado en el 200% del contenedor
        carousel.style.transform = `translateX(${percentage}%)`;
    };

    // Intervalo de tiempo: 4 segundos para que sea una transición calmada
    let slideInterval = setInterval(moveSlider, 4000);

    // Pausar el movimiento si el usuario pasa el mouse por encima (opcional, para mejor UX)
    const container = document.querySelector('.slider-container');
    
    container.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    container.addEventListener('mouseleave', () => {
        slideInterval = setInterval(moveSlider, 4000);
    });

    // Efecto de inclinación leve (Tilt) en las tarjetas al mover el ratón
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        });
    });
});
