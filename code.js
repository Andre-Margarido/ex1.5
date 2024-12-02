function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

let celsiusValue = 25; 
let fahrenheitValue = 77;

let fahrenheitResult = celsiusToFahrenheit(celsiusValue);
let celsiusResult = fahrenheitToCelsius(fahrenheitValue);

alert (
  'Celsius to Fahrenheit: ${celsiusValue}°C equal to ${fahrenheitResult}°F'
  'Fahrenheit para Celsius: ${fahrenheitValue}°F é igual a ${celsiusResult}°C'
)
