//STUDIO: SHUTTLE LAUNCH

// Declare and initialize the variables for exercise 1 here:

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;  
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

//Checking if conditions are met for a succesful launch and giving user feedback
if ((astronautCount <= 7) && 
   (astronautStatus === "ready") && 
   (totalMassKg < maximumMassLimit) &&
   (fuelTempCelsius <= -150) && 
   (fuelTempCelsius >= -300) &&
   (fuelLevel == "100%") && 
   (weatherStatus === "clear")){
    console.log("All systems are a go! Initiating space shuttle launch sequence.");}
    else {
      console.log("WARNING! DO NOT LAUNCH!")
    }

//Printing line after feedback

console.log("-------------------------------------------------------------------------");

// Logging the conditions
console.log("Date:", date);
console.log("Time:", time);
console.log("Astronaut Count:", astronautCount);
console.log("Astronaut Status:", astronautStatus);
console.log("Average Astronaut Mass (kg):", averageAstronautMassKg);
console.log("Crew Mass (kg):", crewMassKg);
console.log("Fuel Mass (kg):", fuelMassKg);
console.log("Shuttle Mass (kg):", shuttleMassKg);
console.log("Total Mass (kg):", totalMassKg);
console.log("Maximum Mass Limit:", maximumMassLimit);
console.log("Fuel Temperature (Celsius):", fuelTempCelsius);
console.log("Minimum Fuel Temperature:", minimumFuelTemp);
console.log("Maximum Fuel Temperature:", maximumFuelTemp);
console.log("Fuel Level:", fuelLevel);
console.log("Weather Status:", weatherStatus);

// Prints line before error message || "have a safe trip"

console.log("-------------------------------------------------------------------------");

// Declaring variables not met for launch and providing an error message
if (!(astronautCount <= 7)){
   console.log("Crew has exceeded maximum capacity.");
} 
if (!(astronautStatus === "ready")) {
   console.log("Astronauts are not ready.");
} 
if (!(totalMassKg < maximumMassLimit)) {
   console.log("Total mass exceeds maximum limit.");
}
if (!(-300 <= fuelTempCelsius))  {
   console.log("Fuel temperature is too low.");
}
if (!(fuelTempCelsius <= -150)) {
   console.log("Fuel temperature is too high.");
}
if (!(fuelLevel === "100%")) {
   console.log("Fuel level is not full.");
}
if (!(weatherStatus === "clear")){
   console.log("weather is not clear.");
}

//Prints line below error messages if any exist 
if (!((astronautCount <= 7) && 
   (astronautStatus === "ready") && 
   (totalMassKg < maximumMassLimit) &&
   (fuelTempCelsius <= -150) && 
   (fuelTempCelsius >= -300) && 
   (fuelLevel == "100%") && 
   (weatherStatus === "clear"))) {
    console.log("-------------------------------------------------------------------------");
   }

//Prints final message
if ((astronautCount <= 7) && 
   (astronautStatus === "ready") && 
   (totalMassKg < maximumMassLimit) &&
   (fuelTempCelsius <= -150) && 
   (fuelTempCelsius >= -300) && 
   (fuelLevel === "100%") && 
   (weatherStatus === "clear")){
    console.log("Have a safe trip!");
   } else console.log("DO NOT LAUNCH!!!");


// Initialize Variables below

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
