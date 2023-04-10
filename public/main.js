

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

function drawFromUrns(group, set) {
    let nextOne = set.splice(randomPicker(set.length), 1)
    group.push(nextOne[0])
    nextOne = ""
}

/* -----    Data    -----*/

localStorage.setItem("groups", "")
localStorage.setItem("areGroupsRendered", "")

let allGroups = []

set1 = new Array // arrays per i sorteggi
set2 = new Array // arrays per i sorteggi
set3 = new Array // arrays per i sorteggi
set4 = new Array // arrays per i sorteggi

group1 = new Array
group2 = new Array
group3 = new Array
group4 = new Array

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

        if (this.set === 1) {
            set1.push(this)
        }
        else if (this.set === 2) {
            set2.push(this)
        }
        else if (this.set === 3) {
            set3.push(this)
        }
        else if (this.set === 4) {
            set4.push(this)
        }
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


/* -----    Game    -----*/

const ContentZone = document.getElementById("content-zone")
const startGame = document.getElementById("start-game-btn")

/* -----    ButtonsToAppend    -----*/

const newDrawButton = document.createElement(`button`)
newDrawButton.innerText = `Draw teams`
newDrawButton.classList.add(`cta`)
newDrawButton.addEventListener("click", () => {
    drawButtonExe()
})

startGame.addEventListener("click", () => {
    ContentZone.removeChild(document.getElementById("bfr-start-text"))
    ContentZone.removeChild(document.getElementById("start-game-btn"))
    renderGroupDraw()
})


/* -----    /ButtonsToAppend    -----*/

function renderGroupDraw() {

        // setTimeout(function(){
            ContentZone.prepend(newDrawButton)
        // }, 1500)

    ContentZone.insertAdjacentHTML('beforeend', `
    <div class="sorteggio-zone">
        <h3 class="text" id="renderGroupLine">These are the teams that will participate at the next World Cup. Time to draw the groups!<h3>
        <h2>Group stage pots</h2>
        <h3 id="1st-pot" class="pots-title">1st pot</h3>
        <ul class="pots-lists">
            <li class="align-li" ><image class="resize" src="images/flags/${set1[0].imgFile}" alt=""></image>${set1[0].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set1[1].imgFile}" alt=""></image>${set1[1].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set1[2].imgFile}" alt=""></image>${set1[2].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set1[3].imgFile}" alt=""></image>${set1[3].name}</li>
        </ul>
        <h3 id="2nd-pot" class="pots-title">2nd pot</h3>
        <ul class="pots-lists">
            <li class="align-li" ><image class="resize" src="images/flags/${set2[0].imgFile}" alt=""></image>${set2[0].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set2[1].imgFile}" alt=""></image>${set2[1].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set2[2].imgFile}" alt=""></image>${set2[2].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set2[3].imgFile}" alt=""></image>${set2[3].name}</li>
        </ul>
        <h3 id="3rd-pot" class="pots-title">3rd pot</h3>
        <ul class="pots-lists">
            <li class="align-li" ><image class="resize" src="images/flags/${set3[0].imgFile}" alt=""></image>${set3[0].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set3[1].imgFile}" alt=""></image>${set3[1].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set3[2].imgFile}" alt=""></image>${set3[2].name}</li> 
            <li class="align-li" ><image class="resize" src="images/flags/${set3[3].imgFile}" alt=""></image>${set3[3].name}</li>
        </ul>
        <h3 id="4th-pot" class="pots-title">4th pot</h3>
        <ul class="pots-lists">
            <li class="align-li" ><image class="resize" src="images/flags/${set4[0].imgFile}" alt=""></image>${set4[0].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set4[1].imgFile}" alt=""></image>${set4[1].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set4[2].imgFile}" alt=""></image>${set4[2].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${set4[3].imgFile}" alt=""></image>${set4[3].name}</li>
        </ul>
    </div>`);
}

function drawButtonExe() {
    drawFromUrns(group1, set1)
    drawFromUrns(group1, set2)
    drawFromUrns(group1, set3)
    drawFromUrns(group1, set4)

    drawFromUrns(group2, set1)
    drawFromUrns(group2, set2)
    drawFromUrns(group2, set3)
    drawFromUrns(group2, set4)

    drawFromUrns(group3, set1)
    drawFromUrns(group3, set2)
    drawFromUrns(group3, set3)
    drawFromUrns(group3, set4)

    drawFromUrns(group4, set1)
    drawFromUrns(group4, set2)
    drawFromUrns(group4, set3)
    drawFromUrns(group4, set4)

    renderGroups()
    allGroups.push(group1)
    allGroups.push(group2)
    allGroups.push(group3)
    allGroups.push(group4)
    document.getElementById("renderGroupLine").classList.add(`hidden`)
    newDrawButton.classList.add(`hidden`)
    localStorage.clear()
    console.log(allGroups)
    localStorage.setItem("groups", JSON.stringify(allGroups))
    console.log(localStorage.getItem("groups"))
    localStorage.setItem("areGroupsRendered", "true")
}


function renderGroups() {
    ContentZone.insertAdjacentHTML('afterBegin',`
    <div class="sorteggio-zone">
        <h3 class="text">From now on, the <a href="schedule.html"><em><strong>"Schedule"</em></strong></a> will be available in the relative page! You can keep playing from there.<h3>
        <h2>Group stage</h2>
        <h3 id="1st-pot" class="pots-title">Group A</h3>
        <ul class="pots-lists">
            <li class="align-li" ><image class="resize" src="images/flags/${group1[0].imgFile}" alt=""></image>${group1[0].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group1[1].imgFile}" alt=""></image>${group1[1].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group1[2].imgFile}" alt=""></image>${group1[2].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group1[3].imgFile}" alt=""></image>${group1[3].name}</li>
        </ul>
        <h3 id="2nd-pot" class="pots-title">Group B</h3>
        <ul class="pots-lists">
            <li class="align-li" ><image class="resize" src="images/flags/${group2[0].imgFile}" alt=""></image>${group2[0].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group2[1].imgFile}" alt=""></image>${group2[1].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group2[2].imgFile}" alt=""></image>${group2[2].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group2[3].imgFile}" alt=""></image>${group2[3].name}</li>
        </ul>
        <h3 id="3rd-pot" class="pots-title">Group C</h3>
        <ul class="pots-lists">
            <li class="align-li" ><image class="resize" src="images/flags/${group3[0].imgFile}" alt=""></image>${group3[0].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group3[1].imgFile}" alt=""></image>${group3[1].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group3[2].imgFile}" alt=""></image>${group3[2].name}</li> 
            <li class="align-li" ><image class="resize" src="images/flags/${group3[3].imgFile}" alt=""></image>${group3[3].name}</li>
        </ul>
        <h3 id="4th-pot" class="pots-title">Group D</h3>
        <ul class="pots-lists">
            <li class="align-li" ><image class="resize" src="images/flags/${group4[0].imgFile}" alt=""></image>${group4[0].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group4[1].imgFile}" alt=""></image>${group4[1].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group4[2].imgFile}" alt=""></image>${group4[2].name}</li>
            <li class="align-li" ><image class="resize" src="images/flags/${group4[3].imgFile}" alt=""></image>${group4[3].name}</li>
        </ul>
    </div>`);

}


