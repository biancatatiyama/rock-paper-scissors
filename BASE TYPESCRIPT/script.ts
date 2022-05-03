const rock = document.getElementById('rockButton') as HTMLButtonElement
const paper = document.getElementById('paperButton') as HTMLButtonElement
const scissors = document.getElementById('scissorsButton') as HTMLButtonElement
const result = document.getElementById('result') as HTMLSpanElement
const yourPointsResult = document.getElementById('yourPoints') as HTMLSpanElement
const aiPointsResult = document.getElementById('aiPoints') as HTMLSpanElement
const previousContainer = document.getElementById('previousContainer') as HTMLDivElement
/* 
SCISSORS > PAPER
PAPER > ROCK
ROCK > SCISSORS

ROCK = 0
PAPER = 1 
SCISSORS = 2



function showPrevious() {
    const rockImg = document.createElement('img')
    rockImg.classList.add('rock-img')
    rockImg.src = 'rock.png'
    previousContainer.prepend(rockImg)
}
🌑📝✂️

*/

let yourPoints = 0
let aiPoints = 0
let previousChoice = '';

function aiRandomizer() {
    return Math.floor(Math.random() * 3)
}
function showPrevious() {
    const prev = document.createElement('span')
    prev.innerText = previousChoice
    previousContainer.prepend(prev)
}
rock.addEventListener('click', () => {
    const aiChoice = aiRandomizer()
    if (aiChoice == 0) {
        result.innerHTML = `DRAW! You chose ROCK and AI chose ROCK`
        previousChoice = `🌑 vs 🌑`
        showPrevious()

    }
    else if (aiChoice == 1) {
        result.innerHTML = `LOST! You chose ROCK and AI chose PAPER`
        aiPoints++
        aiPointsResult.innerHTML = `${aiPoints}`
        previousChoice = `🌑 vs 📝`
        showPrevious()
    }
    else if (aiChoice == 2) {
        result.innerHTML = `WON! You chose ROCK and AI chose SCISSORS`
        yourPoints++
        yourPointsResult.innerHTML = `${yourPoints}`
        previousChoice = `🌑 vs ✂️`
        showPrevious()
    }
})

paper.addEventListener('click', () => {
    const aiChoice = aiRandomizer()
    if (aiChoice == 0) {
        result.innerHTML = `WON! You chose PAPER and AI chose ROCK`
        yourPoints++
        yourPointsResult.innerHTML = `${yourPoints}`
        previousChoice = `📝 vs 🌑`
        showPrevious()
    }
    else if (aiChoice == 1) {
        result.innerHTML = `DRAW! You chose PAPER and AI chose PAPER`
        previousChoice = `📝 vs 📝`
        showPrevious()
    }
    else if (aiChoice == 2) {
        result.innerHTML = `LOST! You chose PAPER and AI chose SCISSORS`
        aiPoints++
        aiPointsResult.innerHTML = `${aiPoints}`
        previousChoice = `📝 vs ✂️`
        showPrevious()
    }
})

scissors.addEventListener('click', () => {
    const aiChoice = aiRandomizer()
    if (aiChoice == 0) {
        result.innerHTML = `LOST! You chose SCISSORS and AI chose ROCK`
        aiPoints++
        aiPointsResult.innerHTML = `${aiPoints}`
        previousChoice = `✂️ vs 🌑`
        showPrevious()
    }
    else if (aiChoice == 1) {
        result.innerHTML = `WON! You chose SCISSORS and AI chose PAPER`
        yourPoints++
        yourPointsResult.innerHTML = `${yourPoints}`
        previousChoice = `✂️ vs 📝`
        showPrevious()
    }
    else if (aiChoice == 2) {
        result.innerHTML = `DRAW! You chose SCISSORS and AI chose SCISSORS`
        previousChoice = `✂️ vs ✂️`
        showPrevious()
    }
})