// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){

    //ROCKET JPEG
    const rocket = document.getElementById("rocket")
    let rocketPositionX = 0
    let rocketPositionY = 0

    //TAKEOFF/LAND/ABORT BUTTONS
    const takeoffButton = document.getElementById("takeoff")
    const landingButton = document.getElementById("landing")
    const abortButton = document.getElementById("missionAbort")

    //CONTROL BUTTONS
    const upButton = document.getElementById("up")
    const downButton = document.getElementById("down")
    const rightButton = document.getElementById("right")
    const leftButton = document.getElementById("left")

    //BACKGROUND IMAGE
    const shuttleBackground = document.getElementById("shuttleBackground")

    //STATS
    const flightStatus = document.getElementById("flightStatus")
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")


    //TAKEOFF BUTTON CONFIG
    takeoffButton.addEventListener("click", function(){
        
        let shouldTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.") 
        if (shouldTakeOff) {        
           flightStatus.innerHTML = "Shuttle in flight."
           shuttleBackground.style.backgroundColor = "blue"
           spaceShuttleHeight.innerHTML = 10000
        } else {
           flightStatus.innerHTML = "Space shuttle ready for takeoff" 
        }
    })

    //LANDING BUTTON CONFIG
    landingButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green"
        spaceShuttleHeight.innerHTML = 0
    })

    //ABORT BUTTON CONFIG
    abortButton.addEventListener("mouseover", function(){
        abortButton.style.backgroundColor = "red"
    })

    abortButton.addEventListener("mouseout", function(){
        abortButton.style.backgroundColor = ""
    })

    abortButton.addEventListener("click", function(){
        const shouldAbort = window.confirm("Confirm that you want to abort the mission.")
        if (shouldAbort){
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green" 
            spaceShuttleHeight.innerHTML = 0
        } else {
            flightStatus.innerHTML = "Shuttle in flight."
        }
    })

    //CONTROL BUTTON CONFIG
    upButton.addEventListener("click", function(){
        rocketPositionY -= 10 
        rocket.style.marginTop = rocketPositionY + 'px'
    })

    downButton.addEventListener("click", function(){
        rocketPositionY += 10 
        rocket.style.marginTop = rocketPositionY + 'px'
    })

    rightButton.addEventListener("click", function(){
        rocketPositionX += 10 
        rocket.style.marginLeft = rocketPositionX + "px"
    })

    leftButton.addEventListener("click", function(){
        rocketPositionX -= 10 
        rocket.style.marginLeft = rocketPositionX + "px"
    })

})
