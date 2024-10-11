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


// Load GeoJSON data via fetch (assuming the file is stored locally or hosted)
fetch('countries.geojson.json') // Change this path to the correct location
    .then(response => response.json())
    .then(geojsonData => {
        console.log(geojsonData);
        // Add the GeoJSON data to your map with styling
        L.geoJson(geojsonData, { style: style }).addTo(map);
    })
    .catch(error => console.error('Error loading GeoJSON data:', error));

// Your country data with values
var countryData = {
    "India": 21.42,
    "Bangladesh": 41.52,
    "Pakistan": 42.34,
    "Philippines": 21.99,
    "Vietnam": 35.71,
    "Nepal": 61.22,
    "Indonesia": 23.94,
    "Sri Lanka": 53.44,
    "Myanmar": 37.10,
    "Thailand": 15.80,
    "Germany": 4.067,
    "France":3.99,
    "United Kingdom":3.283,
    "Italy":4.41,
    "Spain":3.45,
    "Poland":1.4896,
    "Romania":0.931,
    "Netherlands":0.88,
    "Belgium":0.45,
    "Czech Republic":0.360,
    "Greece":0.757,
    "Portugal":0.598,
    "Sweden":0.411,
    "Hungary":0.47,
    "Austria":0.35,
    "Switzerland":0.29,
    "Bulgaria":0.33,
    "Denmark":0.22,
    "Finland":0.18,
    "Slovakia":0.21,
    "Norway":0.18,
    "Ireland":0.24,
    "Croatia":0.23,
    "Lithuania":0.101,
    "Slovenia":0.072,
    "Latvia":0.061,
    "Estonia":0.04,
    "Cyprus":0.05,
    "Luxembourg":0.02,
    "Malta":0.02,
    "United States of America" : "0.1250",
    "Canada" : "0.1250",
    "Mexico" : "0.1250",
    "Brazil" : "0.1250",
    "Argentina" : "0.1250",
    "Colombia" : "0.1250",
    "Peru" : "0.1252",
    "Venezuela" : "0.1250",
    "Chile" : "0.1253",
    "Ecuador" : "0.1250",
    "Bolivia" : "0.1250"


};

// Define the getColor function based on your value ranges
function getColor(value) {
    return value > 50 ? '#8B0000' :   // Dark Red for values above 50
           value > 10 ? '#FF4500' :   // Light Red for values above 30
           value > 0.5 ? '#FFB6C1' :   // Pink for values above 20
           value > 0.3 ? '#673AB7' : // light blue
           value > 0.1250 ? '#FFA500' :   // Orange for values above 10
           value > 0  ? '#FFFF00' :   // Yellow for values above 0
                        '#F0E68C';     // Light Yellow for 0 or less
}


function style(feature) {
        const countryName = feature.properties.name;  // Use country name
        const countryValue = countryData[countryName];
    return {
        fillColor: getColor(countryValue), // Use your data field here
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// Optional: Add a legend to explain the color gradient
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

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


