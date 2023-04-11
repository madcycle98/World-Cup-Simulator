/* -----    Utils    -----*/

function randomPicker(num) {
    return Math.floor(Math.random()*num)
}

function drawFromUrns(group, set) {
    let nextOne = set.splice(randomPicker(set.length), 1)
    group.push(nextOne[0])
    nextOne = ""
}

export {randomPicker, drawFromUrns};