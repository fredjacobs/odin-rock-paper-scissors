

function getComputerChoice(){

    const choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random() * 3)] ;
    return choice
}

function getPlayerSelection(){
    return prompt('Choose: Rock, Paper or Scissors').toLowerCase()
}

console.log(getPlayerSelection())




