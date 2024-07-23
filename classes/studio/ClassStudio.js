//Declare a class called CrewCandidate with a constructor that takes three parameters—name,
// mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        const sum = this.scores.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);

        return Math.round((sum/this.scores.length)*10)/10;
    }

    status() {
        let average = this.average();
        if (average >= 90) {
            return 'Accepted'
        } else if (average >= 80 && average <= 89) {
            return 'Reserve'
        } else if (average >= 70 && average <= 79) {
            return 'Probationary'
        } else {
            return 'Rejected'
        }
            
    }
}

let crewCandidate1 = new CrewCandidate ('Bubba Bear', 135, [88, 85, 90]);
let crewCandidate2 = new CrewCandidate ('Merry Maltese', 1.5, [93, 88, 97]);
let crewCandidate3 = new CrewCandidate ('Glad Gator', 225, [75, 78, 62]);


console.log(`${crewCandidate1.name} earned an average test score of ${crewCandidate1.average()}% and has a status of ${crewCandidate1.status()}.`);

let noOfTestsToAccepted = 0;
let noOfTestsToReserved = 0;

while (crewCandidate3.average() < 80) {
   
    crewCandidate3.addScore(100);
    console.log(crewCandidate3.average());
    noOfTestsToReserved++;
}

while (crewCandidate3.average() < 90) {
   
    crewCandidate3.addScore(100);
    console.log(crewCandidate3.average());
    noOfTestsToAccepted++;
}

console.log(crewCandidate3.status());
console.log(`It took ${crewCandidate3.name} ${noOfTestsToAccepted} tests to get Accepted and ${noOfTestsToReserved} tests to get Reserved.`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.