window.addEventListener("load", init);

function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
    const land = document.getElementById("landShuttle")

    // Put your code for the exercises here.
    
    //configure "take off button"
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });

     button.addEventListener('mouseover', event => {
        button.style.backgroundColor = 'lightgreen'
     })

     button.addEventListener('mouseleave', event => {
        button.style.backgroundColor = ""
     })

     //configure "Land shuttle" button
     land.addEventListener('click', event => {
        paragraph.innerHTML = 'The shuttle is on the ground'
     })

     land.addEventListener('mouseover', event => {
        land.style.backgroundColor = 'lightblue'
     })

     land.addEventListener('mouseleave', event => {
        land.style.backgroundColor = ""
     })

     //configure "abort mission" button
     missionAbort.addEventListener('mouseover', event => {
        missionAbort.style.backgroundColor = "red"
     })

     missionAbort.addEventListener('mouseleave', event => {
        missionAbort.style.backgroundColor = ""
     })

     missionAbort.addEventListener('click', event =>{
        let answer = window.confirm("Are you sure you want to abort the mission?")
        if (answer === true){
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home'
        }
     })



}