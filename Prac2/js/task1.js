function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

// Example usage:
let celsius = 25;
let fahrenheit = 77; 

console.log(`${celsius}°C is equal to ${celsiusToFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F is equal to ${fahrenheitToCelsius(fahrenheit).toFixed(2)}°C`);
