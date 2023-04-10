/* -----    Mobile menu    -----*/

const navigationMenu = document.getElementById("navigation-menu")
const burgerMenu = document.getElementById("burger-menu")

burgerMenu.addEventListener("click", () => {
    navigationMenu.classList.toggle("active")
    burgerMenu.classList.toggle("burger-icon-active")
})

/* -----    Utils    -----*/

function randomPicker(num) {
    return Math.floor(Math.random()*num)
}

/* -----    Data    -----*/

const dataTeams = {
    senegal: {
        name: "Senegal",
        powerRank: 2,
        set: 2,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `senegal.png`,
        imgHTML: `<image class="resize" src="images/flags/senegal.png" alt=""></image>`
    },
    belgium: {
        name: "Belgium",
        powerRank: 2,
        set: 2,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `belgium.png`,
        imgHTML: `<image class="resize" src="images/flags/belgium.png" alt=""></image>`
    },
    brazil: {
        name: "Brazil",
        powerRank: 1,
        set: 1,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `brazil.png`,
        imgHTML: `<image class="resize" src="images/flags/brazil.png" alt=""></image>`
    },
    australia: {
        name: "Australia",
        powerRank: 3,
        set: 4,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `australia.png`,
        imgHTML: `<image class="resize" src="images/flags/australia.png" alt=""></image>`
    },
    ghana: {
        name: "Ghana",
        powerRank: 3,
        set: 4,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `ghana.png`,
        imgHTML: `<image class="resize" src="images/flags/ghana.png" alt=""></image>`
    },
    france: {
        name: "France",
        powerRank: 1,
        set: 1,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `france.png`,
        imgHTML: `<image class="resize" src="images/flags/france.png" alt=""></image>`
    },
    argentina: {
        name: "Argentina",
        powerRank: 1,
        set: 1,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `argentina.png`,
        imgHTML: `<image class="resize" src="images/flags/argentina.png" alt=""></image>`
    },
    england: {
        name: "England",
        powerRank: 1,
        set: 2,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `england.png`,
        imgHTML: `<image class="resize" src="images/flags/england.png" alt=""></image>`
    },
    spain: {
        name: "Spain",
        powerRank: 1,
        set: 2,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `spain.png`,
        imgHTML: `<image class="resize" src="images/flags/spain.png" alt=""></image>`
    },
    portugal: {
        name: "Portugal",
        powerRank: 1,
        set: 3,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `portugal.png`,
        imgHTML: `<image class="resize" src="images/flags/portugal.png" alt=""></image>`
    },
    qatar: {
        name: "Qatar",
        powerRank: 3,
        set: 4,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `qatar.png`,
        imgHTML: `<image class="resize" src="images/flags/qatar.png" alt=""></image>`
    },
    netherlands: {
        name: "Netherlands",
        powerRank: 2,
        set: 3,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `netherlands.png`,
        imgHTML: `<image class="resize" src="images/flags/netherlands.png" alt=""></image>`
    },
    denmark: {
        name: "Denmark",
        powerRank: 2,
        set: 3,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `denmark.png`,
        imgHTML: `<image class="resize" src="images/flags/denmark.png" alt=""></image>`
    },
    southKorea: {
        name: "South Korea",
        powerRank: 3,
        set: 3,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `southkorea.png`,
        imgHTML: `<image class="resize" src="images/flags/southkorea.png" alt=""></image>`
    },
    germany: {
        name: "Germany",
        powerRank: 1,
        set: 1,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `germany.png`,
        imgHTML: `<image class="resize" src="images/flags/germany.png" alt=""></image>`
    },
    usa: {
        name: "USA",
        powerRank: 3,
        set: 4,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        wins: 0,
        draws: 0,
        lost: 0,
        position: 0,
        imgFile: `usa.png`,
        imgHTML: `<image class="resize" src="images/flags/usa.png" alt=""></image>`
    },

}

class team {
    constructor(data){

        Object.assign(this, data)

    }
}

const senegal = new team(dataTeams.senegal)
const belgium = new team(dataTeams.belgium)
const brazil = new team(dataTeams.brazil)
const australia = new team(dataTeams.australia)
const ghana = new team(dataTeams.ghana)
const france = new team(dataTeams.france)
const argentina = new team(dataTeams.argentina)
const england = new team(dataTeams.england)
const spain = new team(dataTeams.spain)
const portugal = new team(dataTeams.portugal)
const qatar = new team(dataTeams.qatar)
const netherlands = new team(dataTeams.netherlands)
const denmark = new team(dataTeams.denmark)
const southKorea = new team(dataTeams.southKorea)
const germany = new team(dataTeams.germany)
const usa = new team(dataTeams.usa)

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

    
let gamesFirstDay = {
    game1:{
        club1:"",
        goalsTeam1:"",
        goalsTeam2:"",
        club2:""
    },
    game2:{
        club1:"",
        goalsTeam1:"",
        goalsTeam2:"",
        club2:""
    },
    game3:{
        club1:"",
        goalsTeam1:"",
        goalsTeam2:"",
        club2:""
    },
    game4:{
        club1:"",
        goalsTeam1:"",
        goalsTeam2:"",
        club2:""
    },
    game5:{
        club1:"",
        goalsTeam1:"",
        goalsTeam2:"",
        club2:""
    },
    game6:{
        club1:"",
        goalsTeam1:"",
        goalsTeam2:"",
        club2:""
    },
    game7:{
        club1:"",
        goalsTeam1:"",
        goalsTeam2:"",
        club2:""
    },
    game8:{
        club1:"",
        goalsTeam1:"",
        goalsTeam2:"",
        club2:""
    }
}
console.log(gamesFirstDay.game1)

/* -----    Game    -----*/

const ContentZoneSchedule = document.getElementById("content-zone-schedule")
logTruthiness(localStorage.getItem("isDayOnePlayed"))

let isDayOnePlayedNS = false
let isDayTwoPlayedNS = false
let isDayThreePlayedNS = false
localStorage.setItem("isDayOnePlayed", "false")
localStorage.setItem("isDayTwoPlayed", "false")
localStorage.setItem("isDayThreePlayed", "false")
let allGroups = ""
function logTruthiness (val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}


group1 = new Array
group2 = new Array
group3 = new Array
group4 = new Array

let groupStage = true
let firstDayHtml
let secondDayHtml
let thirdDayHtml
let day1 = false
let day2 = false
let day3 = false
let firstDay
let secondDay
let thirdDay
/* -----    ButtonsToAppend    -----*/

const playGroupsBtn = document.createElement(`button`)
playGroupsBtn.innerText = `Play matches`
playGroupsBtn.classList.add(`cta`)

allGroups = JSON.parse( localStorage.getItem("groups") )
group1 = allGroups.shift()
group2 = allGroups.shift()
group3 = allGroups.shift()
group4 = allGroups.shift()
getGroupsSchedule()

playGroupsBtn.addEventListener("click", () => {

    playWeek()
})

/* -----    ButtonsToAppend    -----*/


if (localStorage.getItem("areGroupsRendered") === "true") {
    document.getElementById("alert-welcome-text").classList.add(`hidden`)
}
else
{}



function getGroupsSchedule() {
    ContentZoneSchedule.insertAdjacentHTML('afterBegin',
`    <div class="schedule-temp">
    <h2>First day</h2>
            <p>10 / 06</p>
    <div id="first-day no-results-first" class="day-grid">
        <div class="team-home"><image class="resize" src="images/flags/${group1[0].imgFile}" alt=""></image>${group1[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group1[1].name}<image class="resize" src="images/flags/${group1[1].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group1[2].imgFile}" alt=""></image>${group1[2].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group1[3].name}<image class="resize" src="images/flags/${group1[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group2[0].imgFile}" alt=""></image>${group2[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group2[1].name}<image class="resize" src="images/flags/${group2[1].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group2[2].imgFile}" alt=""></image>${group2[2].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group2[3].name}<image class="resize" src="images/flags/${group2[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group3[0].imgFile}" alt=""></image>${group3[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group3[1].name}<image class="resize" src="images/flags/${group3[1].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group3[2].imgFile}" alt=""></image>${group3[2].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group3[3].name}<image class="resize" src="images/flags/${group3[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group4[0].imgFile}" alt=""></image>${group4[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group4[1].name}<image class="resize" src="images/flags/${group4[1].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group4[2].imgFile}" alt=""></image>${group4[2].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group4[3].name}<image class="resize" src="images/flags/${group4[3].imgFile}" alt=""></image></div>
    </div>
    <h2>Second day</h2>
    <p>14 / 06</p>
    <div id="second-day no-results-second" class="day-grid">
        <div class="team-home"><image class="resize" src="images/flags/${group1[0].imgFile}" alt=""></image>${group1[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group1[2].name}<image class="resize" src="images/flags/${group1[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group1[1].imgFile}" alt=""></image>${group1[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group1[3].name}<image class="resize" src="images/flags/${group1[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group2[0].imgFile}" alt=""></image>${group2[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group2[2].name}<image class="resize" src="images/flags/${group2[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group2[1].imgFile}" alt=""></image>${group2[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group2[3].name}<image class="resize" src="images/flags/${group2[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group3[0].imgFile}" alt=""></image>${group3[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group3[2].name}<image class="resize" src="images/flags/${group3[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group3[1].imgFile}" alt=""></image>${group3[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group3[3].name}<image class="resize" src="images/flags/${group3[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group4[0].imgFile}" alt=""></image>${group4[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group4[2].name}<image class="resize" src="images/flags/${group4[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group4[1].imgFile}" alt=""></image>${group4[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group4[3].name}<image class="resize" src="images/flags/${group4[3].imgFile}" alt=""></image></div>
    </div>
    <h2>Third day</h2>
    <p>19 / 06</p>
    <div id="third-day no-results-third" class="day-grid">
        <div class="team-home"><image class="resize" src="images/flags/${group1[0].imgFile}" alt=""></image>${group1[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group1[3].name}<image class="resize" src="images/flags/${group1[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group1[1].imgFile}" alt=""></image>${group1[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group1[2].name}<image class="resize" src="images/flags/${group1[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group2[0].imgFile}" alt=""></image>${group2[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group2[3].name}<image class="resize" src="images/flags/${group2[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group2[1].imgFile}" alt=""></image>${group2[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group2[2].name}<image class="resize" src="images/flags/${group2[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group3[0].imgFile}" alt=""></image>${group3[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group3[3].name}<image class="resize" src="images/flags/${group3[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group3[1].imgFile}" alt=""></image>${group3[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group3[2].name}<image class="resize" src="images/flags/${group3[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group4[0].imgFile}" alt=""></image>${group4[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group4[3].name}<image class="resize" src="images/flags/${group4[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${group4[1].imgFile}" alt=""></image>${group4[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${group4[2].name}<image class="resize" src="images/flags/${group4[2].imgFile}" alt=""></image></div>
    </div>
</div>`
)
document.getElementById("alert-welcome-text").classList.add(`hidden`)
ContentZoneSchedule.prepend(playGroupsBtn)
firstDay = document.getElementById("first-day")
secondDay = document.getElementById("second-day")
thirdDay = document.getElementById("third-day")
}


/* -----    PrependingFirstDayAlreadyPlayed    -----*/

if (localStorage.getItem("firstDayHtml") && localStorage.getItem("secondDayHtml") && localStorage.getItem("thirdDayHtml")) {
    let refreshedThirdDayHtml = JSON.parse(localStorage.getItem("thirdDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedThirdDayHtml) 
    let refreshedSecondDayHtml = JSON.parse(localStorage.getItem("secondDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedSecondDayHtml) 
    let refreshedFirstDayHtml = JSON.parse(localStorage.getItem("firstDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedFirstDayHtml) 
    playGroupsBtn.classList.add(`hidden`)
}

else if (localStorage.getItem("firstDayHtml") && localStorage.getItem("secondDayHtml")) {
    let refreshedSecondDayHtml = JSON.parse(localStorage.getItem("secondDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedSecondDayHtml) 
    let refreshedFirstDayHtml = JSON.parse(localStorage.getItem("firstDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedFirstDayHtml) 
}

else if (localStorage.getItem("firstDayHtml")) {
    let refreshedFirstDayHtml = JSON.parse(localStorage.getItem("firstDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedFirstDayHtml) 
    document.getElementById("no-results-first").add.classList(`hidden`)
}

/* -----    / PrependingFirstDayAlreadyPlayed    -----*/

function playWeek() {

    if (isDayOnePlayedNS === true && isDayTwoPlayedNS === true && isDayThreePlayedNS === false || localStorage.getItem("secondDayHtml")) {
        playGroupsBtn.classList.add(`hidden`)
        renderGame(group4[1], group4[2], groupStage, day3 = true)
        renderGame(group4[0], group4[3], groupStage, day3 = true)
        renderGame(group3[1], group3[2], groupStage, day3 = true)
        renderGame(group3[0], group3[3], groupStage, day3 = true)
        renderGame(group2[1], group2[2], groupStage, day3 = true)
        renderGame(group2[0], group2[3], groupStage, day3 = true)
        renderGame(group1[1], group1[2], groupStage, day3 = true)
        renderGame(group1[0], group1[3], groupStage, day3 = true)
        isDayThreePlayedNS = true
        ContentZoneSchedule.insertAdjacentHTML(`afterBegin`, `
        <h2>Third day</h2>
        <p>19 / 06</p>
        <div id="third-week" class="day-grid">
        ` + thirdDayHtml + `</div>`)
        localStorage.setItem("isDayThreePlayed", "true")
    
    // for (let i = 1; i < 5; i++) {
        sortGroupPosition(group1)
        sortGroupPosition(group2)
        sortGroupPosition(group3)
        sortGroupPosition(group4)
    // // }
    // for (let i = 1; i < 5; i++) {
        allGroups.push(group1)
        allGroups.push(group2)
        allGroups.push(group3)
        allGroups.push(group4)
    // }
        localStorage.setItem("groups", JSON.stringify(allGroups))
        thirdDayHtml = `
        <h2>Third day</h2>
        <p>18 / 06</p>
        <div id="third-week" class="day-grid">
        ` + thirdDayHtml + `</div>`
        localStorage.setItem("thirdDayHtml", JSON.stringify(thirdDayHtml))
        }

    else if (isDayOnePlayedNS === true && isDayTwoPlayedNS === false || localStorage.getItem("firstDayHtml")) {
        renderGame(group4[1], group4[3], groupStage, day2 = true)
        renderGame(group4[0], group4[2], groupStage, day2 = true)
        renderGame(group3[1], group3[3], groupStage, day2 = true)
        renderGame(group3[0], group3[2], groupStage, day2 = true)
        renderGame(group2[1], group2[3], groupStage, day2 = true)
        renderGame(group2[0], group2[2], groupStage, day2 = true)
        renderGame(group1[1], group1[3], groupStage, day2 = true)
        renderGame(group1[0], group1[2], groupStage, day2 = true)
        isDayTwoPlayedNS = true
        ContentZoneSchedule.insertAdjacentHTML(`afterBegin`, `
        <h2>Second day</h2>
        <p>14 / 06</p>
        <div id="first-week" class="day-grid">
        ` + secondDayHtml + `</div>`)
        localStorage.setItem("isDayTwoPlayed", "true")
    
    // for (let i = 1; i < 5; i++) {
        sortGroupPosition(group1)
        sortGroupPosition(group2)
        sortGroupPosition(group3)
        sortGroupPosition(group4)
    // // }
    // for (let i = 1; i < 5; i++) {
        allGroups.push(group1)
        allGroups.push(group2)
        allGroups.push(group3)
        allGroups.push(group4)
    // }
        localStorage.setItem("groups", JSON.stringify(allGroups))
        secondDayHtml = `
        <h2>Second day</h2>
        <p>14 / 06</p>
        <div id="second-week" class="day-grid">
        ` + secondDayHtml + 
        `</div>`
        localStorage.setItem("secondDayHtml", JSON.stringify(secondDayHtml))
        }
    
        

    else if(isDayOnePlayedNS === false){
    renderGame(group4[2], group4[3], groupStage, day1 = true)
    renderGame(group4[0], group4[1], groupStage, day1 = true)
    renderGame(group3[2], group3[3], groupStage, day1 = true)
    renderGame(group3[0], group3[1], groupStage, day1 = true)
    renderGame(group2[2], group2[3], groupStage, day1 = true)
    renderGame(group2[0], group2[1], groupStage, day1 = true)
    renderGame(group1[2], group1[3], groupStage, day1 = true)
    renderGame(group1[0], group1[1], groupStage, day1 = true)

    ContentZoneSchedule.insertAdjacentHTML(`afterBegin`, `
    <h2>First day</h2>
    <p>10 / 06</p>
    <div id="first-week" class="day-grid">
    ` + firstDayHtml + `</div>`)
    localStorage.setItem("isDayOnePlayed", "true")
    isDayOnePlayedNS = true
    // for (let i = 1; i < 5; i++) {
        sortGroupPosition(group1)
        sortGroupPosition(group2)
        sortGroupPosition(group3)
        sortGroupPosition(group4)
    // // }
    // for (let i = 1; i < 5; i++) {
        allGroups.push(group1)
        allGroups.push(group2)
        allGroups.push(group3)
        allGroups.push(group4)
    // }
    localStorage.setItem("groups", JSON.stringify(allGroups))
    firstDayFullHtml = `
    <h2>First day</h2>
    <p>10 / 06</p>
    <div id="first-week" class="day-grid">
    ` + firstDayHtml + `
    </div>`
    localStorage.setItem("firstDayHtml", JSON.stringify(firstDayFullHtml))
    }
}


function sortGroupPosition(group) {

    let groupSorted = []
    groupSorted[0] = {
                name: group[0],
                ptsObj: group[0].points,
                position: 0}
    groupSorted[1] = {
                name: group[1],
                ptsObj: group[1].points,
                position: 0}
    groupSorted[2] = {
                name: group[2],
                ptsObj: group[2].points,
                position: 0}
    groupSorted[3] = {
                name: group[3],
                ptsObj: group[3].points,
                position: 0}

    groupSorted.sort(function(a, b) {
        return b.ptsObj - a.ptsObj
    })
    for ( let i = 0; i < groupSorted.length; i++) {
        groupSorted[i].position = i+1
    }
    for ( let i = 0; i < groupSorted.length; i++) {
        groupSorted[i].name.position = groupSorted[i].position
    }
}


function renderGame(team1, team2, groupStage, day) {

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
            // generate for direct elimination stage
        }
    }

    else if (goalsTeam1 < goalsTeam2) {
        if(groupStage)
        team1.lost += 1,
        team2.wins += 1,
        team2.points += 3
        else {
            // generate for direct elimination stage
        }
        
    }

    else {
        if(groupStage)
        team1.draws += 1,
        team2.draws += 1,
        team1.points += 1,
        team2.points += 1
        else {
            // generate for direct elimination stage
        }
    }

if (day1 === true) {
    firstDayHtml += `<div class="team-home"><image class="resize" src="images/flags/${team1.imgFile}" alt=""></image>${team1.name}</div><div class="goals-home">${goalsTeam1}</div><div class="spacer"> vs </div><div class="goals-away">${goalsTeam2}</div><div class="team-away">${team2.name}<image class="resize" src="images/flags/${team2.imgFile}" alt=""></image></div>`
}
else if(day2 === true) {
    secondDayHtml += `<div class="team-home"><image class="resize" src="images/flags/${team1.imgFile}" alt=""></image>${team1.name}</div><div class="goals-home">${goalsTeam1}</div><div class="spacer"> vs </div><div class="goals-away">${goalsTeam2}</div><div class="team-away">${team2.name}<image class="resize" src="images/flags/${team2.imgFile}" alt=""></image></div>`
}
else if(day3 === true) {
    thirdDayHtml += `<div class="team-home"><image class="resize" src="images/flags/${team1.imgFile}" alt=""></image>${team1.name}</div><div class="goals-home">${goalsTeam1}</div><div class="spacer"> vs </div><div class="goals-away">${goalsTeam2}</div><div class="team-away">${team2.name}<image class="resize" src="images/flags/${team2.imgFile}" alt=""></image></div>`
}
day1 = false
day2 = false
day3 = false
}
