function CreateCoundown() {
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
}

// Add countdown timer to wedding date
function updateCountdown() {
    const weddingDate = new Date('2025-03-25T10:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes`;
        }
    }
}

// Update countdown every minute
setInterval(updateCountdown, 60000);
updateCountdown();

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
