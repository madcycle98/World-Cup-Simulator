import {drawFromUrns} from "/public/utilities.js";
import {set1, set2, set3, set4, allGroups, group1, group2, group3, group4} from  "/public/data.js";
/* -----    Data    -----*/

localStorage.setItem("groups", "")
localStorage.setItem("areGroupsRendered", "")

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

    // This function activates "Draw teams" button and draws the teams for the group stage

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
    localStorage.setItem("groups", JSON.stringify(allGroups))
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


