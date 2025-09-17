// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Add floating hearts animation
function createFloatingHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        font-size: ${Math.random() * 20 + 10}px;
        z-index: 1000;
        pointer-events: none;
        animation: floatHeart 8s linear forwards;
    `;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

// Add floating hearts style
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes floatHeart {
        to {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyle);

// Create floating hearts periodically
setInterval(createFloatingHearts, 3000);
