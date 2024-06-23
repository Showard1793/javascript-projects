const input = require('readline-sync'); // Ensure the module is imported

// Define variables for the LaunchCode shuttle
let startingFuelLevel = [];
let numberOfAstronauts = [];
let altitudeOfShuttle = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

let userInputStartingFuelLevelCharacters = input.question("What is the starting fuel level? ")
let userInputStartingFuelLevelNumber = Number(userInputStartingFuelLevelCharacters);
while (userInputStartingFuelLevelNumber < 0){
   userInputStartingFuelLevelCharacters = input.question("Please enter a positive number. What is the starting fuel level? ")
   userInputStartingFuelLevelNumber = Number(userInputStartingFuelLevelCharacters)
}
while (userInputStartingFuelLevelNumber < 5000 || userInputStartingFuelLevelNumber > 30000){

   while (userInputStartingFuelLevelNumber < 5000){
      console.log('Fuel level too low. Fill it up and try again');
      userInputStartingFuelLevelCharacters = input.question("What is the fuel level now? ")
      userInputStartingFuelLevelNumber = Number(userInputStartingFuelLevelCharacters);
   }
   while (userInputStartingFuelLevelNumber > 30000){
      console.log('Fuel level too high. Take some out and try again');
      userInputStartingFuelLevelCharacters = input.question("What is the fuel level now? ")
      userInputStartingFuelLevelNumber = Number(userInputStartingFuelLevelCharacters);
   }
}
  console. log("You have an acceptable fuel level.") 


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (true){
   let userInputNumberOfAstronauts = input.question("How many astronauts are there? ");
   userInputNumberOfAstronauts = Number(userInputNumberOfAstronauts);
   if (userInputNumberOfAstronauts > 0 && userInputNumberOfAstronauts <= 7){
      numberOfAstronauts.push(userInputNumberOfAstronauts);
      console.log(`There are currently ${userInputNumberOfAstronauts} astronauts on board!`)
      break;
   } else if (userInputNumberOfAstronauts < 0){
      console.log("Please enter a positive number.")
   } else if (userInputNumberOfAstronauts > 7){
      console.log("That number of astronauts is over capacity. Please kick someone out.")
   } 
   
} 


  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (userInputStartingFuelLevelNumber >= 0){
   if (userInputStartingFuelLevelNumber < 0){
      userInputStartingFuelLevelNumber = 0
   } 
   console.log(`Fuel Level: ${userInputStartingFuelLevelNumber} units`);
   console.log(`Altitude: ${altitudeOfShuttle}km`);
   userInputStartingFuelLevelNumber = (userInputStartingFuelLevelNumber - (100 * numberOfAstronauts[0]));
   altitudeOfShuttle += 50;
   if (userInputStartingFuelLevelNumber < 0){
      break;
   }
   
}
console.log("The shuttle has landed!");


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitudeOfShuttle}`);
if (altitudeOfShuttle > 2000){
   console.log("Orbit achieved!")
}