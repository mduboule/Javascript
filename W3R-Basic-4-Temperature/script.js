function celsiusToFahrenheit(){
    const celsiusInput = document.temperatures.celsius.value;
    if(isNaN(celsiusInput)) {
        document.getElementById("celsius").style.boxShadow = "2px 2px 5px red";
    }
     else {
        document.getElementById("celsius").style.boxShadow = "";
        const fahrenheit = Math.round(((celsiusInput * 1.8) + 32));
        document.getElementById("fahrenheit").value = fahrenheit;
    }
}

function fahrenheitToCelsius(){
    const fahrenheitInput = document.temperatures.fahrenheit.value;
    if(isNaN(fahrenheitInput)) {
        document.getElementById("fahrenheit").style.boxShadow = "2px 2px 5px red";
    } else {
        document.getElementById("fahrenheit").style.boxShadow = "";
        const fahrenheit = document.temperatures.fahrenheit.value;
        const celsius = +(((fahrenheit - 32) / 1.8).toFixed(1));
        document.getElementById("celsius").value = celsius;
    }
}

document.getElementById("celsius").addEventListener("input", celsiusToFahrenheit);
document.getElementById("fahrenheit").addEventListener("input", fahrenheitToCelsius);