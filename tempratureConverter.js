function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
do {
    let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    let fahrenheit = celsiusToFahrenheit(celsius)
    console.log("Temperature in Fahrenheit:", fahrenheit);
    let choice = prompt("Do you want to convert another temperature? (yes/no)");
    if (choice.toLowerCase() !== "yes") {
        break; 
    }
} while (true);