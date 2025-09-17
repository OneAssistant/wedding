// Leaflet Map
const map = L.map('map').setView([28.143451313086512, 76.66207487353236], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([28.143451313086512, 76.66207487353236]).addTo(map)
    .bindPopup('Royal Pepper Resort and Hotels, Manesar')
    .openPopup();
