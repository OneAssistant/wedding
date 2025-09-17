// RSVP Form Handler
function handleRSVP(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const rsvpData = Object.fromEntries(formData);

    // Animate button
    const button = event.target.querySelector('.submit-btn');
    button.innerHTML = 'Sending...';
    button.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';

    // Simulate submission
    setTimeout(() => {
        button.innerHTML = '✓ RSVP Sent!';
        button.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.innerHTML = `
            <div style="background: rgba(46, 204, 113, 0.1); border: 2px solid #2ecc71; border-radius: 15px; padding: 20px; margin-top: 20px; text-align: center; color: #27ae60;">
                <h4 style="margin-bottom: 10px;">Thank you for your RSVP!</h4>
                <p>We're excited to celebrate with you on our special day!</p>
            </div>
        `;
        event.target.appendChild(successMessage);

        // Reset form after 3 seconds
        setTimeout(() => {
            event.target.reset();
            button.innerHTML = 'Send RSVP';
            button.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
            successMessage.remove();
        }, 3000);

    }, 1500);
}

// Add confetti effect on RSVP success
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            top: -10px;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            z-index: 10000;
            pointer-events: none;
            animation: confettiFall 3s linear forwards;
        `;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);
