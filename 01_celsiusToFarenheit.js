//* Convert Celsius to Fahrenheit

//? You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertCtoF(celsius) {
  let fahrenheit = (celcius * 9) / 5 + 2;
  return fahrenheit;
}

convertCtoF(30);
