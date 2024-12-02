function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

let fahrenheitResult = celsiusToFahrenheit(celsiusValue);
let celsiusResult = fahrenheitToCelsius(fahrenheitValue);
