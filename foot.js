document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const milesDriven = parseFloat(document.getElementById('miles-driven').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuel-efficiency').value);
    const kwhUsed = parseFloat(document.getElementById('kwh-used').value);
    const meatServings = parseFloat(document.getElementById('meat-servings').value);

    console.log("Inputs:", milesDriven, fuelEfficiency, kwhUsed, meatServings); // Debugging line

    // Check if inputs are valid numbers
    if (isNaN(milesDriven) || isNaN(fuelEfficiency) || isNaN(kwhUsed) || isNaN(meatServings)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Calculate carbon footprints
    const transportationFootprint = (milesDriven / fuelEfficiency) * 19.6 * 52; // kg CO2
    const electricityFootprint = kwhUsed * 0.92 * 12; // kg CO2
    const dietaryFootprint = meatServings * 3.6 * 52; // kg CO2

    console.log("Calculated Footprints:", transportationFootprint, electricityFootprint, dietaryFootprint); // Debugging line

    // Total carbon footprint
    const totalFootprint = transportationFootprint + electricityFootprint + dietaryFootprint;

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Your Estimated Annual Carbon Footprint</h3>
        <p>Total: ${totalFootprint.toFixed(2)} kg CO2</p>
        <p>Transportation Footprint: ${transportationFootprint.toFixed(2)} kg CO2</p>
        <p>Electricity Footprint: ${electricityFootprint.toFixed(2)} kg CO2</p>
        <p>Dietary Footprint: ${dietaryFootprint.toFixed(2)} kg CO2</p>
    `;
    resultDiv.style.display = 'block'; // Show the result
});
