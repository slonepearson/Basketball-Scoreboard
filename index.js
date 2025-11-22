const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score") 
const incrementBtn = document.querySelectorAll(".increment-btn")
const newGameBtn = document.querySelector("#new-game")

let homeCount = 0
let guestCount = 0

const updateWinningTeam = () => {
    if (homeCount > guestCount) {
        homeScore.style.color = '#39FF14'
        guestScore.style.color = ""
    } else if (guestCount > homeCount) {
        guestScore.style.color = '#39FF14'
        homeScore.style.color = ""
    } else {
        homeScore.style.color = ""
        guestScore.style.color = ""
    }
}

const addPoints = (e) => {

    const team = e.target.name
    const points = parseInt(e.target.value, 10)

    switch (team){
        case "home":
            homeCount += points
            homeScore.textContent = homeCount
            break
        case "away":
            guestCount += points
            guestScore.textContent = guestCount
            break
    }
    updateWinningTeam()
}

const newGame = () => {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    updateWinningTeam()
}


for (btn of incrementBtn){
    btn.addEventListener('click', addPoints)
}

newGameBtn.addEventListener('click', newGame)