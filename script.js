document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const countdown = () => {
        const countDate = new Date('December 4, 2025 19:00:00').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.getElementById('days').innerText = textDay;
        document.getElementById('hours').innerText = textHour;
        document.getElementById('minutes').innerText = textMinute;
        document.getElementById('seconds').innerText = textSecond;
    };

    setInterval(countdown, 1000);

    // Music Toggle
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
        } else {
            music.play();
        }
        isPlaying = !isPlaying;
    });

    // RSVP Form
    document.getElementById('submit-rsvp').addEventListener('click', () => {
        const name = document.getElementById('guest-name').value.trim();
        const email = document.getElementById('guest-email').value.trim();
        const message = document.getElementById('rsvp-message');

        if (!name || !email) {
            message.textContent = 'Please enter your name and email.';
            message.style.color = '#d4a29c';
            return;
        }

        message.textContent = `Thank you, ${name}! Your RSVP has been received.`;
        message.style.color = '#3c763d';

        document.getElementById('guest-name').value = '';
        document.getElementById('guest-email').value = '';

        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    });

    // Save the Date Button
    document.getElementById('save-the-date-button').addEventListener('click', () => {
        const eventTitle = encodeURIComponent("Sourabh & Neha's Wedding");
        const eventDetails = encodeURIComponent("Join us to celebrate the wedding of Sourabh and Neha!");
        const eventLocation = encodeURIComponent("Royal Pepper Resort and Hotels, Manesar");
        const eventStartDate = "20251204T133000Z"; // December 4, 2025, 7:00 PM IST (19:00 IST = 13:30 UTC)
        const eventEndDate = "20251204T183000Z";   // Assuming 5 hours event, adjust as needed

        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${eventStartDate}/${eventEndDate}&details=${eventDetails}&location=${eventLocation}&sf=true&output=xml`;
        
        window.open(googleCalendarUrl, '_blank');
    });

    // Leaflet Map
    const map = L.map('map').setView([28.143451313086512, 76.66207487353236], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([28.143451313086512, 76.66207487353236]).addTo(map)
        .bindPopup('Royal Pepper Resort and Hotels, Manesar')
        .openPopup();

    // Intersection Observer for animations
    const animatedSections = document.querySelectorAll('.animated-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});