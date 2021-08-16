const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
let wallet = 100
let bets = []
let myNumber = 0
let myAmount = 0
let myRandom = 0



function roulette(){
    random = numbers[Math.floor(Math.random()* numbers.length)]
        return random
}

function choosenNumber () {
    while (true) {
        let numberInput = parseInt(prompt(`\npick any number from 1 & 36\n`))
        if(numbers.includes(numberInput)){
            myNumber = numberInput 
            console.log("Great choice! that's my lucky number")
            break
        }else{
            console.log("sorry try again")
        }
    }
}
    

function amount(){
    while(true){
        let amountInput = parseInt(prompt(`\nHow much do you want to wager? \n`))
        myAmount = wallet  - amountInput
        wallet = parseFloat(myAmount)
        console.log("Wow! Big Spender")
        break
    }
}

function matching(){
    randomNumber = roulette()
    console.log(randomNumber)
    if (myNumber === randomNumber){
        console.log("Congrats!! You won, here is your prize money")
        matchingAmount =  myAmount * 35
        wallet += matchingAmount
    } 
    else{
        console.log("Dang! Almost got it, Try again!")
    }
}


console.log("Welcome to the roulette table! try your luck and win big!")
console.log(`\nhere is your wallet, spend your money wrecklessly! your total is $${wallet}`)
choosenNumber()
amount()
console.log("We will now spin the Roulette Table! Did you manage to hit your lucky number?")
matching()
console.log(`here is what is remaining in your wallet $${myAmount}`)

