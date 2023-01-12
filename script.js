let computerChoiceDisplay = document.querySelector(".computer-choice")
let userChoiceDisplay = document.querySelector(".user-choice")
let result = document.querySelector("#result")
let btn = document.querySelectorAll("button")
let userChoice ;
let computerChoice ;
  let options = [
  "rock" , "paper" , "scissor"
]

function computer() {
  let index = Math.floor(Math.random()*3)
   computerChoice = options[index]

   console.log(options)

  if (userChoice === computerChoice ) {
     result.innerHTML = " Match tie"

  }else if (userChoice === "rock" && computerChoice === "paper") {
    result.innerHTML = "  computer win"
  }else if (userChoice === "paper" && computerChoice === "scissor") {
    result.innerHTML = "  computer win"
  }else if (userChoice === "paper" && computerChoice === "rock") {
    result.innerHTML =  "  you win"
  }else if (userChoice === "scissor" && computerChoice === "paper") {
    result.innerHTML = "  you win"
  }
  computerChoiceDisplay.innerHTML = computerChoice

  result.innerHTML = win

}




btn.forEach(btn => btn.addEventListener("click",(e) =>{

  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
        computer()

}))