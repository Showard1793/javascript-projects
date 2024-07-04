let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function move() {
      return Math.round(Math.random() * 10);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function move() {
      return Math.round(Math.random() * 10);
   }
}

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function move() {
      return Math.round(Math.random() * 10);
   }
};

let busyBeagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function move() {
      return Math.round(Math.random() * 10);
   }
} 

let toughTardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function move() {
      return Math.round(Math.random() * 10);
   }
}

crew = [superChimpOne, superChimpTwo, salamander, busyBeagle, toughTardigrade]

function crewReport(animalObject) {
   return `${animalObject.name} is a ${animalObject.species}. 
They are ${animalObject.age} years old and ${animalObject.mass} kilograms.
Their ID is ${animalObject.astronautID}.`
}


// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

function fitnessTest(candidates){
   let results = [], numsteps, turns;
   let minTurns;
   let fastestCandidate;

      for (i = 0; i < candidates.length; i++){
         numsteps = 0;
         turns = 0;

         while (numsteps < 20){
            numsteps += candidates[i].move();
            turns++;
         }

      results.push(`${candidates[i].name} took ${turns} turns to cross the finish line!`);
      
         if (turns < minTurns){
            minTurns = turns;
            fastestCandidate = candidates[i].name
         }
      }

   results.push(`The candidate who took the least number of turns to cross the finish line is ${fastestCandidate} with ${minTurns} turns.`);
   return results;
}

console.log(fitnessTest(crew));

//Single Racer Function 

function race(){
   let totalSteps = 0;
   let steps;
   while (totalSteps < 20){
      steps = Math.round(Math.random() * 10)
      totalSteps += steps
      console.log(`Racer took ${steps} steps`)
      if (totalSteps < 20){
      console.log(`Racer is ${20 - totalSteps} steps from the finish line!`)
      }
   }
   return "Racer finished the race!";
}