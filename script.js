
    const playerOptionButtons = document.querySelectorAll('.btn-player-choice');
    const roundWinner = document.querySelector('#round-winner');
    const finalWinner = document.querySelector('#final-winner');
    const displayPlayerScore = document.getElementById('display-player-score');
    const displayCompScore = document.getElementById('display-comp-score');
    const btnNewGame = document.getElementById('btn-new-game');
    let playerChoice = '';
    let computerChoice = '';
    let compScore = 0;
    let playerScore = 0;
    let winner = "";
    
    btnNewGame.addEventListener('click', init);

    function init(){

        compScore = 0;
        playerScore = 0;
        winner = '';

        displayPlayerScore.textContent = playerScore;
        displayCompScore.textContent = compScore;
        roundWinner.textContent = '';
        finalWinner.textContent = '';

        playerOptionButtons.forEach(function(el){
            el.addEventListener('click', game)
        });

    }

function getComputerChoice(){

    const choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random() * 3)] ;
    return choice;
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

function game(e){

        playerChoice = e.target.value;
        computerChoice = getComputerChoice();

        roundInfo = getWinner(computerChoice, playerChoice)

        //NOTE: Find a way to make below lines into multi lines.

        const winMessage = `Player Wins Round!
        ${roundInfo.playerSelection} beats ${roundInfo.computerSelection}`

        const looseMessage = `Computer Wins Round! 
        ${roundInfo.computerSelection} beats ${roundInfo.playerSelection}`

        const drawMessage  = `Draw : 
        ${roundInfo.computerSelection} = ${roundInfo.playerSelection}`
        

        if (roundInfo.winner === 'computer'){
            compScore++
            roundWinner.textContent = looseMessage;
            
        }else if(roundInfo.winner === 'player'){
            playerScore++
            roundWinner.textContent = winMessage;
        }else{
            roundWinner.textContent = drawMessage;
        }

        if (playerScore == 5){
            finalWinner.textContent = 'You Win!';
            playerOptionButtons.forEach(function(el){
                el.removeEventListener('click', game)
            });
        } else if (compScore == 5) {
            finalWinner.textContent = 'Computer Wins!';
            playerOptionButtons.forEach(function(el){
                el.removeEventListener('click', game)
            });
        } 

        displayPlayerScore.textContent = playerScore;
        displayCompScore.textContent = compScore;

        
}















