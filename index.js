

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
//let newMessage = "Okay, play again!"


let player = {     // object topic
    name: "Dee",
    chips: 145   
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " " + ":" + " $"+ player.chips



function startGame() {    // This is how to invoke another function
 isAlive = true
 let firstCard = getRandomCard()
 let secondCard = getRandomCard()
 cards = [firstCard , secondCard]
 sum = firstCard + secondCard
 renderGame()
 }


function renderGame(){
if (sum <= 20) {
    message = "Do you want to play a new card?"
} else if (sum === 21) {
    message = "You've got the blackjack!"
    hasBlackJack = false
} else {
    message = "Sorry, you lose the game!"
    isAlive = true
}
messageEl.textContent = message
sumEl.textContent = "Sum:" + " " + sum
cardsEl.textContent = "Cards: " 
for (let i = 0; i < cards.length; i++){
cardsEl.textContent += cards[i] + " "
}
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard() //randomCard
        sum += card
        cards.push(card)
       renderGame()
    }
}


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}


// function resetGame() {
// messageEl.textContent = newMessage
// sumEl.textContent = "Sum:" 
// cardsEl.textContent = "Cards: " 
// } 












