/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let temps = [];
    let kelvin = (celsius + 273.15);
    let farenheit = (celsius * 1.80 + 32.00)
    temps.push(kelvin);
    temps.push(farenheit)
    return temps;
    
};