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
const wallet = []
let total = 0 

function roulette(){
randomNumber = []
random = numbers[Math.floor(Math.random()* numbers.length)]
randomNumber += random 
return randomNumber
}
function choosenNumber (number, amount) {
let choosenNumber 
while (!choosenNumber ) {
let userInput = prompt(`\nWhat ${amount} would you like to bet?\n`)
let userInputTwo = prompt(`\nWhat ${number} would you like to bet on?\n`)
choosenNumber  = numbers[number][userInput]
if (!choosenNumber) {
  console.log("that number is not valid, please try again.")
}
}
}

function combine(){
if(choosenNumber === roulette){
    return(amount*35)
}
}

//   console.log(`The ${orderedItem.name} is a great choice! That will be $${orderedItem.price}`)

//   orderedItems.push(orderedItem.name)
//   bill += parseFloat(orderedItem.price)
// }



// function matching(){
//     if(choosenNumber === randomNumber){
//         console.log("congrats!! you won!!")
//     }
// }
console.log("Welcome to the roulette table! please give me your money")
console.log(choosenNumber("number", "amount"))
console.log(choosenNumber("number", "amount"))