// Initialize the map
const map = L.map('map').setView([20, 80], 5); // Adjust the latitude and longitude as needed

// Load and display the map tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Add markers
const locations = [
    { name: 'Almaty', coords: [43.222, 76.8512] },
    { name: 'Karachi', coords: [24.8607, 67.0011] },
    { name: 'Mumbai', coords: [19.076, 72.8777] },
    { name: 'Hyderabad', coords: [17.385, 78.4867] },
    { name: 'Bangalore', coords: [12.9716, 77.5946] },
    { name: 'Chennai', coords: [13.0827, 80.2707] },
    { name: 'New Delhi', coords: [28.6139, 77.209] },
    { name: 'Bhutan', coords: [27.5149, 90.4336] },
    { name: 'Bangladesh', coords: [23.685, 90.3563] },
];

// Loop through each location and add a marker
locations.forEach(location => {
    L.marker(location.coords).addTo(map)
        .bindPopup(location.name)
        .openPopup();
});

// Function to go back (add functionality as needed)
function goBack() {
    // Implement your logic here to go back
    alert('Back to beginning function not implemented.');
}