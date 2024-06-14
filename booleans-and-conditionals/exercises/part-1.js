//PART 1

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let commandOverride = false;

//PART 2 -PREDICTION: "engines are off" will be logged to the console

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

//PART 3 - Write conditional expressions to satisfy the safety rules

   //Logs if Crew is ready

   if (crewStatus) {
   console.log("Crew Ready");
   } else {
      console.log("Crew Not Ready");
   }
   
   //Logs computer status
   
   if (computerStatusCode === 200){
      console.log("Please stand by. Computer is rebooting.");
   } else if (computerStatusCode === 400){
      console.log("Success! Computer online.");
   } else {
      console.log("ALERT: Computer offline!");
   }
   
   //Logs Shuttle Speed
   
   if (shuttleSpeed > 17500) {
      console.log("ALERT: Escape velocity reached!");
    } else if (shuttleSpeed < 8000) {
      console.log("ALERT: Cannot maintain orbit!");
    } else {
      console.log("Stable speed.");
    }
   
//PART 4 - Predict - Yes, they are the same

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}

if (commandOverride) {
   console.log("Shuttle Clear for Launch!");
} else if (!commandOverride) {
   console.log("Shuttle not Clear for Launch!");


//PART 5 - Monitor the shuttles fuel status
   
//Intialize the variables

let fuelLevel = 21000;
let engineTemperature = 1200;
let engineIndicatorLight = "Not red blinking";

if ((fuelLevel < 1000) || (engineTemperature > 3500) || engineIndicatorLight === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT!"); 
} else if (fuelLevel <= 5000 || engineTemperature > 2500){
   console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500){
   console.log("Full tank. Engines good.");
} else {
   console.log("Fuel and engine status pending...");
}
 

//PART 6 - Final bit of fun

if (engineIndicatorLight === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT!");
} else if (!crewStatus) {
   console.log("Crew status not ready.");
} else if (computerStatusCode !== 200) {
   console.log("Computer status code error.");
} else if (shuttleSpeed < 15000 || shuttleSpeed > 30000) {
   console.log("Shuttle speed is out of range.");
} else {
   console.log("All systems go for launch!");
}
} else {
   console.log("Launch scrubbed");
}