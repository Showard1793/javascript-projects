// Declare and assign the variables 

let nameOfSpaceShuttle = "Determination"
let shuttleSpeedMPH = Number(17500);
let kilometersToMars = Number(225000000);
let kilometersToMoon = Number(384400);
let milesPerKilometer = Number(.621);

// Additional variables 

let milesToMars = (kilometersToMars * milesPerKilometer);
let milesToMoon = (kilometersToMoon * milesPerKilometer);

// 'typeof' each variable.

console.log(typeof(nameOfSpaceShuttle));
console.log(typeof(shuttleSpeedMPH));
console.log(typeof(distanceToMarsKM));
console.log(typeof(distanceToMoonKM));
console.log(typeof(milesPerKilometer));

// Calculate days to get to Mars

let hoursToMars = (milesToMars / shuttleSpeedMPH);
let daysToMars = (hoursToMars / 24);

// Print results of the space mission to Mars

console.log(nameOfSpaceShuttle + " will take " + daysToMars + " days to reach Mars");

// Calculate days to get to the Moon

let hoursToMoon = (milesToMoon / shuttleSpeedMPH);
let daysToMoon = (hoursToMoon / 24);

// Print the results of the trip to the moon below

console.log(nameOfSpaceShuttle + " will take " + daysToMoon + " days to reach the Moon");