//These scripts convert temperatures between Celsius, Fahrenheit and Kelvin

//Celsius to Fahrenheit
const CelsiusToFahrenheit = (temperature) => {
    convers = (9*temperature) / 5 + 32;
    console.log(temperature + 'ºC is equivalent to ' + convers + 'ºF.');
    return convers;
};

CelsiusToFahrenheit(0);
CelsiusToFahrenheit(40);
console.log();

//Fahrenheit to Celsius
const FahrenheitToCelsius = (temperature) => {
    convers = ((temperature-32)/9) * 5;
    console.log(temperature + 'ºF is equivalent to ' + convers + 'ºC.');
    return convers;
};

FahrenheitToCelsius(32);
FahrenheitToCelsius(104);
console.log();

//Kelvin to Celsius
const KelvinToCelsius = (temperature) => {
    convers = temperature + 273.15;
    console.log(temperature + 'K is equivalent to ' + convers + 'ºC.');
    return convers;
};

KelvinToCelsius(0);
KelvinToCelsius(40);
console.log();

//Celsius to Kelvin
const CelsiusToKelvin = (temperature) => {
    convers = temperature - 273.15;
    console.log(temperature + 'ºC is equivalent to ' + convers + 'K.');
    return convers;
};

CelsiusToKelvin(0);
CelsiusToKelvin(40);
console.log();

//Kelvin to Fahrenheit
const KelvinToFahrenheit = (temperature) => {
    convers = temperature * (9/5) - 459.67;
    console.log(temperature + 'K is equivalent to ' + convers + 'ºF.');
    return convers;
};

KelvinToFahrenheit(0);
KelvinToFahrenheit(40);
console.log();

//Fahrenheit to Kelvin
const FahrenheitToKelvin = (temperature) => {
    convers = (temperature + 459.67) * (5/9);
    console.log(temperature + 'ºF is equivalent to ' + convers + 'K.');
    return convers;
};

FahrenheitToKelvin(0);
FahrenheitToKelvin(40);
console.log();