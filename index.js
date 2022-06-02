// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

rollBtn.addEventListener("click",()=>{
   let randomNumber = Math.floor(Math.random() * 6) + 1
   if (player1Turn) {
       player1Dice.textContent = randomNumber
       player1Dice.classList.remove("active")
       player2Dice.classList.add("active")
       message.textContent ="Player 2 turn"
       player1Score+=randomNumber
       player1Scoreboard.textContent = player1Score
    } else {
        player2Dice.textContent = randomNumber
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
        message.textContent ="Player 1 turn"
        player2Score+=randomNumber
        player2Scoreboard.textContent = player2Score
   }
   
   if (player1Score>=20) {
      message.textContent = "Player 1 has Won!"
      showReset()
   } else if (player2Score>=20) {
      message.textContent = "Player 2 has Won!"
      showReset()
   }

   player1Turn = !player1Turn

})

function showReset() {
   resetBtn.style.display = "block"
   rollBtn.style.display = "none"
}

/*features to do
- double or nothing button
- maket the game fair
- add animation
- a flyng cow
*/
