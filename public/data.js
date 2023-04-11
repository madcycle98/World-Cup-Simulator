let allGroups = []
let set1 = [], set2 = [], set3 = [], set4 = []
let group1 = [], group2 = [], group3 = [], group4 = []

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

// Ranking system that provides better performances from better teams

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

export {dataTeams, team, senegal, belgium, brazil, australia, ghana, france, argentina, england, spain, portugal, qatar, netherlands, denmark, southKorea, germany, usa,
     powerRankArray1, powerRankArray2, powerRankArray3, set1, set2, set3, set4, allGroups, group1, group2, group3, group4};