const prompt = require('prompt-sync')()

function getMove(name) {
    const validMoves = ['rock' , 'paper' , 'scissors']
    let move = 'Invalid move'
    while (validMoves.includes(move)=== false) { // while move is not rock, paper, scissors
        move = prompt(`${name} choose Rock Paper or Scissors: `)
        move = move.toLowerCase().trim()
    }

return(move)}

const playerOneName = prompt ('Enter your name: ')
const playerTwoName = prompt ('Enter your name: ')

let playerOneMove = getMove(playerOneName)

let playerTwoMove = getMove(playerTwoName)

if (playerOneMove === playerTwoMove) {
    console.log('Tie') 
} else {
   if (playerOneMove === 'rock' ) {
    const winner = (playerTwoMove === 'scissors') ? playerOneName : playerTwoName
    console.log(`Congratulations ${winner}!`)
    } else if (playerOneMove === 'paper' ) {
        const winner = (playerTwoMove === 'rock') ? playerOneName : playerTwoName
        console.log(`Congratulations ${winner}!`)
        } else if (playerOneMove === 'scissors' ) {
            const winner = (playerTwoMove === 'paper') ? playerOneName : playerTwoName
            console.log(`Congratulations ${winner}!`)
            }
   }