// Change the background color to a gradient upon page load
document.body.style.backgroundColor = '#2a2e36'; // Set initial background color

// Trigger the pop-up after the transition ends
setTimeout(function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Show the pop-up
}, 12000); // 12 seconds delay (after color transition finishes)

// Close the pop-up when the "X" button is clicked
document.getElementById('close').onclick = function() {
    document.getElementById('popup').style.display = 'none';
    document.body.style.backgroundColor = '#A9B3A0'; // Set background to greenish-grey;
}

