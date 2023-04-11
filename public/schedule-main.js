import { randomPicker } from "./utilities.js"
import {allGroups, powerRankArray1, powerRankArray2, powerRankArray3} from  "/public/data.js";


/* -----    Game    -----*/

const ContentZoneSchedule = document.getElementById("content-zone-schedule")
localStorage.getItem("isDayOnePlayed")

let isDayOnePlayedNS = false
let isDayTwoPlayedNS = false
let isDayThreePlayedNS = false
localStorage.setItem("isDayOnePlayed", "false")
localStorage.setItem("isDayTwoPlayed", "false")
localStorage.setItem("isDayThreePlayed", "false")

let groupStage = true
let firstDayHtml = ""
let secondDayHtml = ""
let thirdDayHtml = ""
let day1 = false
let day2 = false
let day3 = false
/* -----    ButtonsToAppend    -----*/

const playGroupsBtn = document.createElement(`button`)
playGroupsBtn.innerText = `Play matches`
playGroupsBtn.classList.add(`cta`)
let allGroupsParsed = JSON.parse( localStorage.getItem("groups") )
let retGroup1 = allGroupsParsed.shift(), retGroup2 = allGroupsParsed.shift(), retGroup3 = allGroupsParsed.shift(), retGroup4 = allGroupsParsed.shift()
getGroupsSchedule()

playGroupsBtn.addEventListener("click", () => {

    playWeek()
})

/* -----    ButtonsToAppend    -----*/


if (localStorage.getItem("areGroupsRendered") === "true") {
    document.getElementById("alert-welcome-text").classList.add(`hidden`)
}

function getGroupsSchedule() {
    ContentZoneSchedule.insertAdjacentHTML('afterBegin',
`    <div class="schedule-temp">
    <h2>First day</h2>
            <p>10 / 06</p>
    <div id="first-day no-results-first" class="day-grid">
        <div class="team-home"><image class="resize" src="images/flags/${retGroup1[0].imgFile}" alt=""></image>${retGroup1[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup1[1].name}<image class="resize" src="images/flags/${retGroup1[1].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup1[2].imgFile}" alt=""></image>${retGroup1[2].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup1[3].name}<image class="resize" src="images/flags/${retGroup1[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup2[0].imgFile}" alt=""></image>${retGroup2[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup2[1].name}<image class="resize" src="images/flags/${retGroup2[1].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup2[2].imgFile}" alt=""></image>${retGroup2[2].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup2[3].name}<image class="resize" src="images/flags/${retGroup2[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup3[0].imgFile}" alt=""></image>${retGroup3[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup3[1].name}<image class="resize" src="images/flags/${retGroup3[1].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup3[2].imgFile}" alt=""></image>${retGroup3[2].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup3[3].name}<image class="resize" src="images/flags/${retGroup3[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup4[0].imgFile}" alt=""></image>${retGroup4[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup4[1].name}<image class="resize" src="images/flags/${retGroup4[1].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup4[2].imgFile}" alt=""></image>${retGroup4[2].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup4[3].name}<image class="resize" src="images/flags/${retGroup4[3].imgFile}" alt=""></image></div>
    </div>
    <h2>Second day</h2>
    <p>14 / 06</p>
    <div id="second-day no-results-second" class="day-grid">
        <div class="team-home"><image class="resize" src="images/flags/${retGroup1[0].imgFile}" alt=""></image>${retGroup1[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup1[2].name}<image class="resize" src="images/flags/${retGroup1[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup1[1].imgFile}" alt=""></image>${retGroup1[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup1[3].name}<image class="resize" src="images/flags/${retGroup1[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup2[0].imgFile}" alt=""></image>${retGroup2[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup2[2].name}<image class="resize" src="images/flags/${retGroup2[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup2[1].imgFile}" alt=""></image>${retGroup2[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup2[3].name}<image class="resize" src="images/flags/${retGroup2[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup3[0].imgFile}" alt=""></image>${retGroup3[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup3[2].name}<image class="resize" src="images/flags/${retGroup3[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup3[1].imgFile}" alt=""></image>${retGroup3[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup3[3].name}<image class="resize" src="images/flags/${retGroup3[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup4[0].imgFile}" alt=""></image>${retGroup4[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup4[2].name}<image class="resize" src="images/flags/${retGroup4[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup4[1].imgFile}" alt=""></image>${retGroup4[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup4[3].name}<image class="resize" src="images/flags/${retGroup4[3].imgFile}" alt=""></image></div>
    </div>
    <h2>Third day</h2>
    <p>19 / 06</p>
    <div id="third-day no-results-third" class="day-grid">
        <div class="team-home"><image class="resize" src="images/flags/${retGroup1[0].imgFile}" alt=""></image>${retGroup1[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup1[3].name}<image class="resize" src="images/flags/${retGroup1[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup1[1].imgFile}" alt=""></image>${retGroup1[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup1[2].name}<image class="resize" src="images/flags/${retGroup1[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup2[0].imgFile}" alt=""></image>${retGroup2[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup2[3].name}<image class="resize" src="images/flags/${retGroup2[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup2[1].imgFile}" alt=""></image>${retGroup2[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup2[2].name}<image class="resize" src="images/flags/${retGroup2[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup3[0].imgFile}" alt=""></image>${retGroup3[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup3[3].name}<image class="resize" src="images/flags/${retGroup3[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup3[1].imgFile}" alt=""></image>${retGroup3[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup3[2].name}<image class="resize" src="images/flags/${retGroup3[2].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup4[0].imgFile}" alt=""></image>${retGroup4[0].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup4[3].name}<image class="resize" src="images/flags/${retGroup4[3].imgFile}" alt=""></image></div>
        <div class="team-home"><image class="resize" src="images/flags/${retGroup4[1].imgFile}" alt=""></image>${retGroup4[1].name}</div><div class="goals-home day-grid-noresults"></div><div class="spacer"> vs </div><div class="goals-away day-grid-noresults"></div><div class="team-away">${retGroup4[2].name}<image class="resize" src="images/flags/${retGroup4[2].imgFile}" alt=""></image></div>
    </div>
</div>`
)
document.getElementById("alert-welcome-text").classList.add(`hidden`)
ContentZoneSchedule.prepend(playGroupsBtn)
const firstDay = document.getElementById("first-day")
const secondDay = document.getElementById("second-day")
const thirdDay = document.getElementById("third-day")
}


/* -----    PrependingFirstDayAlreadyPlayed    -----*/

if (localStorage.getItem("firstDayHtml") && localStorage.getItem("secondDayHtml") && localStorage.getItem("thirdDayHtml")) {
    let refreshedFirstDayHtml = JSON.parse(localStorage.getItem("firstDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedFirstDayHtml)
    let refreshedSecondDayHtml = JSON.parse(localStorage.getItem("secondDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedSecondDayHtml) 
    let refreshedThirdDayHtml = JSON.parse(localStorage.getItem("thirdDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedThirdDayHtml) 
    playGroupsBtn.classList.add(`hidden`)
}

else if (localStorage.getItem("firstDayHtml") && localStorage.getItem("secondDayHtml")) {
    let refreshedFirstDayHtml = JSON.parse(localStorage.getItem("firstDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedFirstDayHtml) 
    let refreshedSecondDayHtml = JSON.parse(localStorage.getItem("secondDayHtml"))
    ContentZoneSchedule.insertAdjacentHTML('afterBegin', refreshedSecondDayHtml) 
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
        renderGame(retGroup4[1], retGroup4[2], groupStage, day3 = true)
        renderGame(retGroup4[0], retGroup4[3], groupStage, day3 = true)
        renderGame(retGroup3[1], retGroup3[2], groupStage, day3 = true)
        renderGame(retGroup3[0], retGroup3[3], groupStage, day3 = true)
        renderGame(retGroup2[1], retGroup2[2], groupStage, day3 = true)
        renderGame(retGroup2[0], retGroup2[3], groupStage, day3 = true)
        renderGame(retGroup1[1], retGroup1[2], groupStage, day3 = true)
        renderGame(retGroup1[0], retGroup1[3], groupStage, day3 = true)
        isDayThreePlayedNS = true
        ContentZoneSchedule.insertAdjacentHTML(`afterBegin`, `
        <h2>Third day</h2>
        <p>19 / 06</p>
        <div id="third-week" class="day-grid">
        ` + thirdDayHtml + `</div>`)
        localStorage.setItem("isDayThreePlayed", "true")
    for (let i = 1; i < 5; i++) {
        sortGroupPosition(retGroup1)
        sortGroupPosition(retGroup2)
        sortGroupPosition(retGroup3)
        sortGroupPosition(retGroup4)
    }
    // for (let i = 1; i < 5; i++) {
        allGroups.push(retGroup1, retGroup2, retGroup3, retGroup4)
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
        renderGame(retGroup4[1], retGroup4[3], groupStage, day2 = true)
        renderGame(retGroup4[0], retGroup4[2], groupStage, day2 = true)
        renderGame(retGroup3[1], retGroup3[3], groupStage, day2 = true)
        renderGame(retGroup3[0], retGroup3[2], groupStage, day2 = true)
        renderGame(retGroup2[1], retGroup2[3], groupStage, day2 = true)
        renderGame(retGroup2[0], retGroup2[2], groupStage, day2 = true)
        renderGame(retGroup1[1], retGroup1[3], groupStage, day2 = true)
        renderGame(retGroup1[0], retGroup1[2], groupStage, day2 = true)
        isDayTwoPlayedNS = true
        ContentZoneSchedule.insertAdjacentHTML(`afterBegin`, `
        <h2>Second day</h2>
        <p>14 / 06</p>
        <div id="first-week" class="day-grid">
        ` + secondDayHtml + `</div>`)
        localStorage.setItem("isDayTwoPlayed", "true")
    
    // for (let i = 1; i < 5; i++) {
        sortGroupPosition(retGroup1)
        sortGroupPosition(retGroup2)
        sortGroupPosition(retGroup3)
        sortGroupPosition(retGroup4)
    // // }
    // for (let i = 1; i < 5; i++) {
        allGroups.push(retGroup1,retGroup2, retGroup3, retGroup4)
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
    renderGame(retGroup4[2], retGroup4[3], groupStage, day1 = true)
    renderGame(retGroup4[0], retGroup4[1], groupStage, day1 = true)
    renderGame(retGroup3[2], retGroup3[3], groupStage, day1 = true)
    renderGame(retGroup3[0], retGroup3[1], groupStage, day1 = true)
    renderGame(retGroup2[2], retGroup2[3], groupStage, day1 = true)
    renderGame(retGroup2[0], retGroup2[1], groupStage, day1 = true)
    renderGame(retGroup1[2], retGroup1[3], groupStage, day1 = true)
    renderGame(retGroup1[0], retGroup1[1], groupStage, day1 = true)

    ContentZoneSchedule.insertAdjacentHTML(`afterBegin`, `
    <h2>First day</h2>
    <p>10 / 06</p>
    <div id="first-week" class="day-grid">
    ` + firstDayHtml + `</div>`)
    localStorage.setItem("isDayOnePlayed", "true")
    isDayOnePlayedNS = true
    // for (let i = 1; i < 5; i++) {
        sortGroupPosition(retGroup1)
        sortGroupPosition(retGroup2)
        sortGroupPosition(retGroup3)
        sortGroupPosition(retGroup4)
    // // }
    // for (let i = 1; i < 5; i++) {
        allGroups.push(retGroup1, retGroup2, retGroup3, retGroup4)
    // }
    localStorage.setItem("groups", JSON.stringify(allGroups))
    const firstDayFullHtml = `
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

    const goalsTeam1 = renderRandomGoals(team1)
    const goalsTeam2 = renderRandomGoals(team2)
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
