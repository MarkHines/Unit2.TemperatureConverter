const convertToCelsius = (temperature) => {
  const degreesCelsius = (5/9) * (temperature - 32);
  return degreesCelsius;
}

// console.log(convertToCelsius(75));

const describeTemperature = (temperature) => {
  const degreesCelsius = (5/9) * (temperature - 32);
  if (degreesCelsius < 0) {
    return `${temperature} degrees is very cold`;
  } else if (degreesCelsius < 20) {
    return `${temperature} degrees is cold`;
  } else if (degreesCelsius < 30) {
    return `${temperature} degrees is warm `;
  } else if (degreesCelsius < 40) {
    return `${temperature} degrees is hot`;
  } else if (degreesCelsius >= 40) {
    return `${temperature} degrees is very hot`;
  }
}

// describeTemperature(75);
const userInputTemp = prompt(`Enter a temperature`);
const description = describeTemperature(userInputTemp);
// console.log(description);
alert(description);