let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score") 

function addPoints(team, points) {
    if (team === 'home'){
        homeCount += points
        homeScore.textContent = homeCount
    } else if (team === 'guest') {
        guestCount += points
        guestScore.textContent = guestCount
    }
    updateWinningTeam()
}

function newGame() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    updateWinningTeam() // Reset colors too
}

function updateWinningTeam() {
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