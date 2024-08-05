//finished
window.addEventListener("load", init);

function init () {
    const missionAbortButton = document.getElementById("abortMissionButton");
    const liftOffButton = document.getElementById("liftoffButton");
    const statusReport = document.getElementById("statusReport");
    const landShuttleButton = document.getElementById("landShuttleButton")

    // Put your code for the exercises here.
    
    //configure "take off liftOffButton"
    liftOffButton.addEventListener('click', event => {
        statusReport.innerHTML = 'Houston! We have liftoff!';
     });

     liftOffButton.addEventListener('mouseover', event => {
        liftOffButton.style.backgroundColor = 'lightgreen'
     })

     liftOffButton.addEventListener('mouseleave', event => {
        liftOffButton.style.backgroundColor = ""
     })

     //configure "landShuttleButton shuttle" liftOffButton
     landShuttleButton.addEventListener('click', event => {
        statusReport.innerHTML = 'The shuttle is on the ground'
     })

     landShuttleButton.addEventListener('mouseover', event => {
        landShuttleButton.style.backgroundColor = 'lightblue'
     })

     landShuttleButton.addEventListener('mouseleave', event => {
        landShuttleButton.style.backgroundColor = ""
     })

     //configure "abort mission" liftOffButton
     missionAbortButton.addEventListener('mouseover', event => {
        missionAbortButton.style.backgroundColor = "red"
     })

     missionAbortButton.addEventListener('mouseleave', event => {
        missionAbortButton.style.backgroundColor = ""
     })

     missionAbortButton.addEventListener('click', event =>{
        let answer = window.confirm("Are you sure you want to abort the mission?")
        if (answer === true){
            statusReport.innerHTML = 'Mission aborted! Space shuttle returning home'
        }
     })



}