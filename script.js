const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const container = document.querySelector('div')
const content = document.querySelector('#bodyContent')
const endMessage = document.createElement('h1')
let computerSelection
let playerSelection
let wins = 0
let losses = 0
let draws = 0

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
            playerSelection = '🪨'
            document.querySelector('#computerSelection').innerText = computerSelection
            roundResult(playerSelection, computerSelection)
            highlightPick([paper, scissors], rock)
            removeListener()
            roundTimer()
            break;
        case 'paper':
            playerSelection = '📄'
            document.querySelector('#computerSelection').innerText = computerSelection
            roundResult(playerSelection, computerSelection)
            highlightPick([rock, scissors], paper)
            removeListener()
            roundTimer()
            break;
        case 'scissors':
            playerSelection = '✂️'
            document.querySelector('#computerSelection').innerText = computerSelection
            roundResult(playerSelection, computerSelection)
            highlightPick([rock, paper], scissors)
            removeListener()
            roundTimer()
            break;
    }
}
function roundResult(player, computer) {
    if (player === computer) {
        draws++;
        document.querySelector('#topText').innerText = 'It\'s a draw'
    } else {
        switch (player) {
            case '🪨':
                if (computer === '✂️') {
                    wins++;
                    document.querySelector('#topText').innerText = 'You won!'
                } else {
                    losses++;
                    document.querySelector('#topText').innerText = 'You lost.'
                }
                break;

            case '📄':
                if (computer === '🪨') {
                    wins++;
                    document.querySelector('#topText').innerText = 'You won!'
                } else {
                    losses++;
                    document.querySelector('#topText').innerText = 'You lost.'
                }
                break;

            case '✂️':
                if (computer === '📄') {
                    wins++;
                    document.querySelector('#topText').innerText = 'You won!'
                } else {
                    losses++;
                    document.querySelector('#topText').innerText = 'You lost.'
                }
                break;
        }
    }
    document.querySelector('#wins').innerText = `Wins: ${wins}`
    document.querySelector('#losses').innerText = `Losses: ${losses}`
    document.querySelector('#draws').innerText = `Draws: ${draws}`
    if (wins >= 5) {
        container.removeChild(content)
        container.appendChild(endMessage).innerText = "You won the game!"
    } else if (losses >= 5) {
        container.removeChild(content)
        container.appendChild(endMessage).innerText = "You lost the game."
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
        document.querySelector('#topText').innerText = 'Make your pick'
        container.addEventListener('click', clickHandler)
    }, 3000)
}
function highlightPick(hide, highlight) {
    hide[0].classList.add('hidden')
    hide[1].classList.add('hidden')
    highlight.classList.remove('hov')
    highlight.classList.remove('act')
}