// build a function that mimics a roulette game.
//     be able to bet on any number 1-35
//     set the amount you want on any number
// player starts with a cetain amount of money
//      if they win, they get money
//         they win $36 for every $1
//      if they lose, they lose money
// if they run out of money they need to go away
// set the amount of money they play each hand
// cash out or lose


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]
let wallet = 100
let bets = []

// indent properly
function roulette(){
random = numbers[Math.floor(Math.random()* numbers.length)]
return random
}


function bet (number) {
let bet 
while (!bet ) {
let numberInput = prompt(`\nWhat ${number} would you like to bet on?\n`)
numberInput = bets[numbers]
if (!bet) {
  console.log("that number is not valid, please try again.")
}
}

bets = numberInput

}

function combine(){
if(choosenNumber === roulette){
    return(amount*35)
}
}


console.log("Welcome to the roulette table! try your luck and win big!")
console.log(`\nhere is your wallet, spend your money wrecklessly! your total is $${wallet}`)
console.log("\nPick a number between 1 and 35")
bet("number")

