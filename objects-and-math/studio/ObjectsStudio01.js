// Code your selectRandomEntry function here:
function selectRandomEntry(min,max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}

// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];
//TEST CODE
function makeShuffledArray(arr){
  let randomizedArr = [];
  let element;
  let max = arr.length - 1;

  while (arr.length > 0){
    let randomIndex = selectRandomEntry(0, max);
    element = arr.splice(randomIndex, 1,)[0];
    randomizedArr.push(element);
    max = arr.length - 1
  }
  return randomizedArr;
}

idNumbers = [291, 414, 503, 599, 796, 890]
console.log(makeShuffledArray(idNumbers));

//Testing makeShuffledArray  ++++

idNumbers = [291, 414, 503, 599, 796, 890]

let shuffledArray = makeShuffledArray(idNumbers);
console.log(shuffledArray);

idNumbers = [291, 414, 503, 599, 796, 890]

let winningNums = []
for (let i = 0; i < 3; i++){
  winningNums.push(shuffledArray[i])
}

console.log(winningNums);
// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};

let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
idNumbers = [291, 414, 503, 599, 796, 890]


function selectWinners(arr){
  let shuffledArrayNumbers = makeShuffledArray(idNumbers);
  console.log(shuffledArrayNumbers);
  let winningNumbers = [];
  let crew = [];
  for (let i = 0; i < 3; i++){
    winningNumbers.push(shuffledArrayNumbers[i]);
  }

  for (let i = 0; i < animals.length; i++){
  if (winningNumbers.includes(animals[i].astronautID)){
    console.log(`${animals[i].name} is a winner!`)

    crew.push(animals[i]);
    }
  }
  return crew;
}


function congratulateWinners(){
  crew = selectWinners(animals);
  console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!}`)
}

congratulateWinners();