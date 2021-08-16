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


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
let wallet = 100
let bets = []
let myNumber = []
let myAmount = []

function roulette(){
    random = numbers[Math.floor(Math.random()* numbers.length)]
        return random
}

function choosenNumber () {
    let choosenNumber  
    while (!choosenNumber) {
        let numberInput = prompt(`\nPlease pick a number between the numbers from 1 and 36\n`)
        myNumber = numberInput 
        break
    }

    console.log("Great choice! that's my lucky number")
}

function amount(){
    let amount 
    while(!amount){
        let amountInput = prompt(`\nNow, please put the amount you want to bet!\n`)
        myAmount = amountInput
        break
    }

    console.log("Big Spender!")
}



console.log("Welcome to the roulette table! try your luck and win big!")
console.log(`\nhere is your wallet, spend your money wrecklessly! your total is $${wallet}`)
// betTwo("amount")
choosenNumber()
amount()
console.log()






