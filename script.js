function getComputersChoice() {
    let randomNumber = Math.random()
    if (randomNumber > (2 / 3)) {
        return 'rock'
    } else if (randomNumber < (1 / 3)) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
// let winCount = 0
// let lossCount = 0
// function playRound(playerSelection, computerSelection) {

//     if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
//         return "Type in 'rock', 'paper', or 'scissors'!"
//     }

//     if (playerSelection === computerSelection) {
//         return 'Its a draw! Both you and the computer selected ' + playerSelection
//     }

//     if (playerSelection === 'rock') {

//         if (computerSelection === 'paper') {
//             lossCount++
//             return 'You lost! You selected rock and the computer selected paper'
//         } else {
//             winCount++
//             return 'You win! You selected rock and the computer selected scissors'
//         }

//     } else if (playerSelection === 'paper') {

//         if (computerSelection === 'scissors') {
//             lossCount++
//             return 'You lost! You selected paper and the computer selected scissors'
//         } else {
//             winCount++
//             return 'You win! You selected paper and the computer selected rock'
//         }

//     } else if (playerSelection === 'scissors') {

//         if (computerSelection === 'rock') {
//             lossCount++
//             return 'You lost! You selected scissors and the computer selected rock'
//         } else {
//             winCount++
//             return 'You win! You selected scissors and the computer selected paper'
//         }

//     }
// }
// function game() {
//     let i = 0
//     while (i < 5) {
//         let playerSelection = prompt('Round ' + (i + 1) + ': Rock, paper or scissors?').toLowerCase()
//         let computerSelection = getComputersChoice()
//         console.log(playRound(playerSelection, computerSelection))
//         i++
//     }
//     if (winCount < lossCount) {
//         console.log('You lost the game.')
//     } else if (winCount > lossCount) {
//         console.log('You won the game!')
//     } else {
//         console.log('Its a draw!')
//     }
// }
// game()
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const container = document.querySelector('div')
let computerSelection
let playerSelection

container.addEventListener('click', (event) => {
    let target = event.target
    switch(target.id) {
        case 'rock':
            playerSelection = 'rock'
            break;
        case 'paper':
            playerSelection = 'paper'
            break;
        case 'scissors':
            playerSelection = 'scissors'
            break;
    }
    computerSelection = getComputersChoice()
    console.log(playRound(playerSelection, computerSelection))
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