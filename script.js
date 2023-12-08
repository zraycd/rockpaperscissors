const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const container = document.querySelector('div')
let computerSelection
let playerSelection

function getComputersChoice() {
    let randomNumber = Math.random()
    if (randomNumber > (2 / 3)) {
        return '🪨'
    } else if (randomNumber < (1 / 3)) {
        return '📄'
    } else {
        return '✂️'
    }
}
container.addEventListener('click', clickHandler)
function removeListener() {
    container.removeEventListener('click', clickHandler)
}
function clickHandler(event) {
    let targetId = event.target.id
    computerSelection = getComputersChoice()
    switch(targetId) {
        case 'rock':
            playerSelection = 'rock'
            document.querySelector('#computerSelection').innerText = computerSelection
            highlightPick([paper, scissors], rock)
            removeListener()
            roundTimer()
            break;
        case 'paper':
            playerSelection = 'paper'
            document.querySelector('#computerSelection').innerText = computerSelection
            highlightPick([rock, scissors], paper)
            removeListener()
            roundTimer()
            break;
        case 'scissors':
            playerSelection = 'scissors'
            document.querySelector('#computerSelection').innerText = computerSelection
            highlightPick([rock, paper], scissors)
            removeListener()
            roundTimer()
            break;
    }
}
function playRound(player, computer) {
    if (player === computer) {
        return 'Its a draw.'
    }
    switch(player) {
        case 'rock':
            return computer === 'scissors' ? 'You won!' : 'You lost.';
        case 'paper':
            return computer === 'rock' ? 'You won!' : 'You lost.';
        case 'scissors':
            return computer === 'paper' ? 'You won!' : 'You lost.';
        
    }
}
function roundTimer() {
    setTimeout(() => {
        let rps = [rock, paper, scissors]
        rps.forEach(element => {
            element.classList.remove('hidden')
            element.classList.add('hov')
            element.classList.add('act')
        })
        document.querySelector('#computerSelection').innerText = '?'
        container.addEventListener('click', clickHandler)
    }, 3000)
}
function highlightPick(hide, highlight) {
    hide[0].classList.add('hidden')
    hide[1].classList.add('hidden')
    highlight.classList.remove('hov')
    highlight.classList.remove('act')
}
