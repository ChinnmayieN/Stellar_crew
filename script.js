// Define a custom emoji icon
const emojiIcon = L.divIcon({
    className: 'emoji-icon', // Custom class for styling
    html: '<span style="font-size: 24px;">📍</span>', // Use the desired emoji here
    iconSize: [30, 30], // Size of the icon (width, height)
});

// Define a custom icon
//const customIcon = L.icon({
//    iconUrl: 'path/to/your/custom-icon.png', // Path to your custom icon image
//    iconSize: [30, 40], // Size of the icon
//    iconAnchor: [15, 40], // Point of the icon which will correspond to marker's location
//    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
//});

// Initialize the map
var map = L.map('map', {
    zoomControl: true,         // Enables zoom controls
    scrollWheelZoom: true,     // Allows zooming with the mouse wheel
    doubleClickZoom: false,     // Allows zooming on double-click
    dragging: false,            // Enables dragging
    minZoom: 2,                // Prevents zooming out below level 2
    maxZoom: 18                // Sets the maximum zoom-in level (default is 18)
}).setView([0, 0], 2); // Centered on the whole world with an initial zoom level of 2

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define locations with their coordinates and pop-up messages
const locations = [
    { coords: [37.7749, -122.4194], message: 'I am in San Francisco, USA' },
    { coords: [51.5074, -0.1278], message: 'I am in London, UK' },
    { coords: [35.6895, 139.6917], message: 'I am in Tokyo, Japan' },
    { coords: [-33.4489, -70.6693], message: 'I am in Santiago, Chile' },
    { coords: [20.5937, 78.9629], message: 'I am in India' },
    { coords: [40.7128, -74.0060], message: 'I am in New York City, USA' },
    { coords: [-33.8688, 151.2093], message: 'I am in Sydney, Australia' },
    { coords: [30.0444, 31.2357], message: 'I am in Cairo, Egypt' },
    { coords: [23.6850, 90.3563], message: 'I am in Bangladesh' },
    { coords: [15.8700, 100.9925], message: 'I am in Thailand' },
    { coords: [21.473534, 55.975414], message: 'I am in Oman' },
   // Add more locations as needed
];

// Loop through the locations and add markers
locations.forEach(location => {
    const marker = L.marker(location.coords , { icon: emojiIcon }).addTo(map);
    marker.bindPopup(location.message); // Bind the pop-up message to the marker
});
