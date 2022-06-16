function celciusToFarr(celcius) {
  let farrTemp = Math.round(((celcius*1.8) + 32)*100)/100;

  return "The temperature is " + farrTemp +  "F";
}

function farrToCel(farr) {
  let celTemp = Math.round(((farr-32)*5/9)*100)/100;

  return "The temperature is " + celTemp + "C";
}

console.log(celciusToFarr(30));

console.log(farrToCel(100));