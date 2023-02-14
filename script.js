

function getComputerChoice(){

    const choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random() * 3)] ;
    return choice
}

function getPlayerSelection(){
    return prompt('Choose: Rock, Paper or Scissors').toLowerCase()
}

function getWinner(computerSelection, playerSelection){

    let winner  = "";

    if (computerSelection === 'rock' && playerSelection === 'scissors'){
        winner = 'computer'
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        winner = 'player'
    }else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        winner = 'player'
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        winner = 'computer'
    }else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        winner = 'computer'
    } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        winner = 'player'
    }else{
        winner = 'draw'
    }

    return {winner,computerSelection, playerSelection}

}



function playRound(){

    const computerSelection = getComputerChoice()
    const playerSelection = getPlayerSelection()

    let roundInfo = getWinner(computerSelection, playerSelection)

    return roundInfo


}

function game(){

    let compScore = 0
    let playerScore = 0
    let winner = ""
    

     for(let i = 1; i <= 5; i++){

        

        roundInfo = playRound()

        const winMessage = `You win! ${roundInfo.playerSelection} beats ${roundInfo.computerSelection}`
        const looseMessage = `You loose! ${roundInfo.computerSelection} beats ${roundInfo.playerSelection}`
        const drawMessage  = `Draw - ${roundInfo.computerSelection} = ${roundInfo.playerSelection}`

        if (roundInfo.winner === 'computer'){
            compScore++
            console.log(looseMessage)
            
        }else if(roundInfo.winner === 'player'){
            playerScore++
            console.log(winMessage)
        }else{
            console.log(drawMessage)
        }

        console.log(`Comp Score: ${compScore} \nPlayer Score:  ${playerScore}`)
        

    }
}

game()










