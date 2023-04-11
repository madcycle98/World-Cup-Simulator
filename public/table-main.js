th = document.getElementsByTagName(`th`)

/* -----    Game    -----*/

let allGroups = ""
allGroups = JSON.parse( localStorage.getItem("groups") )
console.log(allGroups)
group1 = new Array
group2 = new Array
group3 = new Array
group4 = new Array
group1 = allGroups.shift()
group2 = allGroups.shift()
group3 = allGroups.shift()
group4 = allGroups.shift()

function updateGroupsAfterGame() {
    if(localStorage.getItem("isDayOnePlayed")) {
        
        loadTable(group1, "tableData1")
        loadTable(group2, "tableData2")
        loadTable(group3, "tableData3")
        loadTable(group4, "tableData4")
    }
    else if (localStorage.getItem("isDayOnePlayed") === "true") {
        loadTable(group1, "tableData1")
        loadTable(group2, "tableData2")
        loadTable(group3, "tableData3")
        loadTable(group4, "tableData4")
    }
}


function loadTable(group, tableData) {
    
    let dataHtml = ``
    let dataHtml1 = ``
    let dataHtml2 = ``
    let dataHtml3 = ``
    let dataHtml4 = ``

 for(let i = 0; i < group.length; i++) {
     if(group[i].position === 1) {
        dataHtml1 = `
        <tr class="promoted">
            <th>${group[i].position}</th>
            <th class="positioning"><image class="resize" src="images/flags/${group[i].imgFile}" alt=""></image>${group[i].name}</th>
            <th>${group[i].points}</th>
            <th>${group[i].wins}</th>
            <th>${group[i].draws}</th>
            <th>${group[i].lost}</th>
            <th>${group[i].goalsFor}</th>
            <th>${group[i].goalsAgainst}</th>
        </tr>` }
    else if(group[i].position === 2) {
        dataHtml2 = `
        <tr class="promoted">
            <th>${group[i].position}</th>
            <th class="positioning"><image class="resize" src="images/flags/${group[i].imgFile}" alt=""></image>${group[i].name}</th>
            <th class="resize-cell">${group[i].points}</th>
            <th class="resize-cell">${group[i].wins}</th>
            <th class="resize-cell">${group[i].draws}</th>
            <th class="resize-cell">${group[i].lost}</th>
            <th class="resize-cell">${group[i].goalsFor}</th>
            <th class="resize-cell">${group[i].goalsAgainst}</th>
        </tr>` 
    }
    else if(group[i].position === 3) {
        dataHtml3 = `
        <tr>
            <th>${group[i].position}</th>
            <th class="positioning"><image class="resize" src="images/flags/${group[i].imgFile}" alt=""></image>${group[i].name}</th>
            <th class="resize-cell">${group[i].points}</th>
            <th class="resize-cell">${group[i].wins}</th>
            <th class="resize-cell">${group[i].draws}</th>
            <th class="resize-cell">${group[i].lost}</th>
            <th class="resize-cell">${group[i].goalsFor}</th>
            <th class="resize-cell">${group[i].goalsAgainst}</th>
        </tr>` 
    }
    else if(group[i].position === 4) {
        dataHtml4 = `
        <tr>
            <th>${group[i].position}</th>
            <th class="positioning"><image class="resize" src="images/flags/${group[i].imgFile}" alt=""></image>${group[i].name}</th>
            <th class="resize-cell">${group[i].points}</th>
            <th class="resize-cell">${group[i].wins}</th>
            <th class="resize-cell">${group[i].draws}</th>
            <th class="resize-cell">${group[i].lost}</th>
            <th class="resize-cell">${group[i].goalsFor}</th>
            <th class="resize-cell">${group[i].goalsAgainst}</th>
        </tr>` 
    }
 }
    dataHtml = dataHtml1 + dataHtml2 + dataHtml3 + dataHtml4
    document.getElementById(tableData).innerHTML = dataHtml
}



updateGroupsAfterGame()
