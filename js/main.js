// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    CreateCoundown();
    // Observe cards and timeline items
    document.querySelectorAll('.detail-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
});
