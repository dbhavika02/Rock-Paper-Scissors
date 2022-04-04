const computerhoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

 possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
     userChoice = e.target.id
     userChoiceDisplay.innerHTML=userChoice
     gerateComputerChoice()
     getResult()
 }))

 function gerateComputerChoice(){
     const randomNumber = Math.floor(Math.random()*possibleChoice.length) //or u can use 3 as its length is 3

     if(randomNumber === 0){
         computerChoice = 'rock'
     }
     if(randomNumber === 1){
        computerChoice = 'scissors'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    computerhoiceDisplay.innerHTML=computerChoice
 }

 function getResult(){
     if(computerChoice === userChoice){
         result = 'its a draw!'
     }
     if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost!'
    }

 if(computerChoice === 'scissors' && userChoice === 'paper'){
    result = 'you lost!'
}
if(computerChoice === 'scissors' && userChoice === 'rock'){
    result = 'you win!'
}
if(computerChoice === 'paper' && userChoice === 'rock'){
    result = 'you lost!'
}
if(computerChoice === 'paper' && userChoice === 'scissors'){
    result = 'you win!'
}
resultDisplay.innerHTML = result
}