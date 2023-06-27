//Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);

// ---===-=-=-===---=-=-=---===-=-=-===---==-=-=---===-=-=-===---=-=-=

function celToFah(celsius) {
    let farhenheit = (celsius * (9/5)) + 32 //convert Celsius to Fahrenheit
    fahrenheit = fahrenheit.toFixed(2); //Round result to 2 decimal places
    console.log(fahrenheit);
}

function celToKel(celsius) {
    let kelvin = celsius + 273.15; //convert celsius to kelvin
    kelvin = kelvin.toFixed(2)); //round result to 2 decimeal places
    console.log(kelvin);
}
