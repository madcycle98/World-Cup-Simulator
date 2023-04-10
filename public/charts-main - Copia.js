/* -----    Mobile menu    -----*/

const navigationMenu = document.getElementById("navigation-menu")
const burgerMenu = document.getElementById("burger-menu")

burgerMenu.addEventListener("click", () => {
    navigationMenu.classList.toggle("active")
    burgerMenu.classList.toggle("burger-icon-active")
})

/* -----    Utils    -----*/


let winners = {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    semi1: "",
    semi2: "",
    final: "",
}

const Quart1 = document.getElementById("quart1")
const Quart2 = document.getElementById("quart2")
const Quart3 = document.getElementById("quart3")
const Quart4 = document.getElementById("quart4")
const Quart5 = document.getElementById("quart5")
const Quart6 = document.getElementById("quart6")
const Quart7 = document.getElementById("quart7")
const Quart8 = document.getElementById("quart8")
const semi1 = document.getElementById("semi1")
const semi2 = document.getElementById("semi2")
const semi3 = document.getElementById("semi3")
const semi4 = document.getElementById("semi4")
const final1 = document.getElementById("final1")
const final2 =document.getElementById("final2")

function randomPicker(num) {
    return Math.floor(Math.random()*num)
}

const powerRankArray1 = new Array(100)
    powerRankArray1.fill(0, 0, 10)
    powerRankArray1.fill(1, 10, 23)
    powerRankArray1.fill(2, 23, 71)
    powerRankArray1.fill(3, 71, 91)
    powerRankArray1.fill(4, 91, 98)
    powerRankArray1.fill(5, 98, 100)
const powerRankArray2 = new Array(100)
    powerRankArray2.fill(0, 0, 25)
    powerRankArray2.fill(1, 25, 60)
    powerRankArray2.fill(2, 60, 88)
    powerRankArray2.fill(3, 88, 95)
    powerRankArray2.fill(4, 95, 99)
    powerRankArray2.fill(5, 99, 100)
const powerRankArray3 = new Array(100)
    powerRankArray3.fill(0, 0, 60)
    powerRankArray3.fill(1, 60, 94)
    powerRankArray3.fill(2, 94, 98)
    powerRankArray3.fill(3, 98, 99)
    powerRankArray3.fill(4, 99, 100)

    function renderGame(team1, team2, groupStage, htmlNodeId, htmlNodeId2, nextTurn) {

        function renderRandomGoals(squad) { // based on powerRank
            if (squad.powerRank === 1) {
                return powerRankArray1[randomPicker(100)]
            }
            else if (squad.powerRank === 2) {
                return powerRankArray2[randomPicker(100)]
            }
            else if (squad.powerRank === 3) {
                return powerRankArray3[randomPicker(100)]
            }
        
        }
        goalsTeam1 = renderRandomGoals(team1)
        goalsTeam2 = renderRandomGoals(team2)
        team1.goalsFor += goalsTeam1
        team1.goalsAgainst += goalsTeam2
        team2.goalsFor += goalsTeam2
        team2.goalsAgainst += goalsTeam1
    
        if (goalsTeam1 > goalsTeam2) {
            if(groupStage)
            team1.wins += 1,
            team2.lost += 1,
            team1.points += 3
            else {
            knockoutStage(htmlNodeId, htmlNodeId2)
            winnerWho = team1
            htmlNodeId.style.fontWeight = "bold"
            nextTurn.innerText = team1.name
            nextTurn.insertAdjacentHTML('afterbegin', team1.imgHTML)
            }
        }
    
        else if (goalsTeam1 < goalsTeam2) {
            if(groupStage)
            team1.lost += 1,
            team2.wins += 1,
            team2.points += 3
            else {
            knockoutStage(htmlNodeId, htmlNodeId2)
            winnerWho = team2
            htmlNodeId2.style.fontWeight = "bold"
            nextTurn.innerText = team2.name
            nextTurn.insertAdjacentHTML('afterbegin', team2.imgHTML)
            }
        }
    
        else {
            if(groupStage)
            team1.draws += 1,
            team2.draws += 1,
            team1.points += 1,
            team2.points += 1
            else {
            knockoutStage(htmlNodeId, htmlNodeId2)
            penalties(htmlNodeId, htmlNodeId2)
            }
        }

        return winnerWho

        function knockoutStage() {
            htmlNodeId.insertAdjacentText(`beforeend`, ` - ${goalsTeam1}`)
            htmlNodeId2.insertAdjacentText(`beforeend`, ` - ${goalsTeam2}`)
        }

        function penalties() {
            if (randomPicker(2) === 1) {
                htmlNodeId.insertAdjacentText(`beforeend`, ` wins in penalties`)
                htmlNodeId.style.fontWeight = "bold"
                nextTurn.innerText = team1.name
                winnerWho = team1
                nextTurn.insertAdjacentHTML('afterbegin', team1.imgHTML)
            }
            else {
                htmlNodeId2.insertAdjacentText(`beforeend`, ` wins in penalties`)
                htmlNodeId2.style.fontWeight = "bold"
                nextTurn.innerText = team2.name
                winnerWho = team2
                nextTurn.insertAdjacentHTML('afterbegin', team2.imgHTML)
            }
        }
    }
/* -----    ButtonsToAppend    -----*/

    const playStageBtn = document.createElement(`button`)
    playStageBtn.innerText = `Play quarters`
    playStageBtn.classList.add(`cta`)

    const span = document.createElement(`span`)

/* -----    Game    -----*/

const contentZone = document.getElementById("content-zone-schedule")
const allGroups = JSON.parse( localStorage.getItem("groups") )
const group1 = allGroups.shift()
const group2 = allGroups.shift()
const group3 = allGroups.shift()
const group4 = allGroups.shift()
const group1P1 = group1.find(item => item.position === 1)
console.log(group1P1)
const group1P2 = group1.find(item => item.position === 2)
const group2P1 = group2.find(item => item.position === 1)
const group2P2 = group2.find(item => item.position === 2)
const group3P1 = group3.find(item => item.position === 1)
const group3P2 = group3.find(item => item.position === 2)
const group4P1 = group4.find(item => item.position === 1)
const group4P2 = group4.find(item => item.position === 2)

let image1 = document.createElement('img')
image1.classList.add("resize")
let image2 = document.createElement('img')
image2.classList.add("resize")
let image3 = document.createElement('img')
image3.classList.add("resize")
let image4 = document.createElement('img')
image4.classList.add("resize")
let image5 = document.createElement('img')
image5.classList.add("resize")
let image6 = document.createElement('img')
image6.classList.add("resize")
let image7 = document.createElement('img')
image7.classList.add("resize")
let image8 = document.createElement('img')
image8.classList.add("resize")

function addImage(locationId, team, image) {
    locationId.prepend(image)
    image.src = `/public/images/flags/${team.imgFile}`;
}



const GroupStageGamesPlayed = group1[0].wins + group1[0].draws + group1[0].lost

if(GroupStageGamesPlayed === 3) {
    document.getElementById("alert-welcome-text").classList.add(`hidden`)
    Quart1.innerText = group1P1.name
    addImage(Quart1, group1P1, image1)
    Quart2.innerText = group2P2.name
    addImage(Quart2, group2P2, image2)
    Quart3.innerText = group3P1.name
    addImage(Quart3, group3P1, image3)
    Quart4.innerText = group4P2.name
    addImage(Quart4, group4P2, image4)
    Quart5.innerText = group1P2.name
    addImage(Quart5, group1P2, image5)
    Quart6.innerText = group2P1.name
    addImage(Quart6, group2P1, image6)
    Quart7.innerText = group3P2.name
    addImage(Quart7, group3P2, image7)
    document.getElementById("quart8").innerText = group4P1.name
    addImage(Quart8, group4P1, image8)
    document.getElementById("quart1").append(span)
    contentZone.prepend(playStageBtn)
}

function playQuartMode() {
    playQuarters()
    playStageBtn.innerText = `Play semis`
    playStageBtn.removeEventListener(`click`, playQuartMode)
    playStageBtn.addEventListener(`click`, playSemisMode)
    console.log(winners)
}

function playSemisMode() {
    playSemis()
    playStageBtn.innerText = `Play finals`
    playStageBtn.removeEventListener(`click`, playSemisMode)
    playStageBtn.addEventListener(`click`,playFinalsMode)
    console.log(winners)
}

function playFinalsMode() {
    playFinal()
    contentZone.insertAdjacentHTML(`beforeend`, `
    <p>World Cup is over! <strong>"Team"</strong> won!</p>
    `)
    playStageBtn.add.style.display = "none"
}

playStageBtn.addEventListener("click", playQuartMode)

function playQuarters() {
    winners.q1 = renderGame(group1P1, group2P2, false, Quart1, Quart2, semi1, image1, image2)
    winners.q2 = renderGame(group3P1, group4P2, false, Quart3, Quart4, semi2, image3, image4)
    winners.q3 = renderGame(group1P2, group2P1, false, Quart5, Quart6, semi3, image5, image6)
    winners.q4 = renderGame(group3P2, group4P1, false, Quart7, Quart8, semi4, image7, image8)
}

function playSemis() {
    winners.semi1 = renderGame(winners.q1, winners.q2, false, semi1, semi2, final1)
    winners.semi2 = renderGame(winners.q3, winners.q4, false, semi3, semi4, final2)
}

function playFinal() {
    winners.final = renderGame(winners.semi1, winners.semi2, false, final1, final2, "")
}