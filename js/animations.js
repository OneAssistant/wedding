// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px) perspective(1000px)`;
    }
});

// Add mouse follow effect for morphing shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.morph-shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.02;
        const x = mouseX * 50 * speed;
        const y = mouseY * 50 * speed;
        shape.style.transform += ` translate(${x}px, ${y}px)`;
    });
});

// Add typing animation to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Add entrance animations with stagger effect
function staggerAnimation() {
    const cards = document.querySelectorAll('.detail-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animationDelay = `${index * 0.2}s`;
            card.classList.add('animate-in');
        }, index * 200);
    });
}
