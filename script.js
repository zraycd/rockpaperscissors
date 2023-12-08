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
container.addEventListener('click', (event) => {
    computerSelection = getComputersChoice()

    let target = event.target

    console.log(target)
    switch(target.id) {
        case 'rock':
            playerSelection = 'rock'
            document.querySelector('#computerSelection').innerText = computerSelection
            paper.classList.add('hidden')
            scissors.classList.add('hidden')
            console.log('rock')
            roundTimer()
            break;
        case 'paper':
            playerSelection = 'paper'
            document.querySelector('#computerSelection').innerText = computerSelection
            rock.classList.add('hidden')
            scissors.classList.add('hidden')
            roundTimer()
            break;
        case 'scissors':
            playerSelection = 'scissors'
            document.querySelector('#computerSelection').innerText = computerSelection
            paper.classList.add('hidden')
            rock.classList.add('hidden')
            roundTimer()
            break;
    }
})

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
        rock.classList.remove('hidden')
        paper.classList.remove('hidden')
        scissors.classList.remove('hidden')
        document.querySelector('#computerSelection').innerText = '?'
    }, 3000)
}
