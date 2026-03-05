/**
 * Script.js - Lógica funcional y renderizado matemático
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación secuencial de las tarjetas (Stagger effect)
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach((card, index) => {
        // Retrasamos la aparición de cada tarjeta 150ms respecto a la anterior
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

    // 2. Configuración de MathJax para asegurar el renderizado
    // Esto detecta si hay cambios dinámicos y procesa las fórmulas TeX
    if (window.MathJax) {
        window.MathJax.typesetPromise().then(() => {
            console.log('MathJax: Fórmulas de límites renderizadas correctamente.');
        }).catch((err) => console.warn('MathJax Error: ', err));
    }

    // 3. Feedback visual al hacer clic en los enlaces
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Creamos un pequeño efecto de ondas (ripple) al presionar
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            
            // Dejamos que la transición ocurra antes de navegar (opcional)
            // Si quieres que sea instantáneo, elimina el preventDefault
            console.log(`Navegando a: ${this.getAttribute('href')}`);
        });
    });

});

// Estilo dinámico para el efecto de click (inyectado para no saturar CSS)
const style = document.createElement('style');
style.innerHTML = `
    .ripple-effect {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(style);
