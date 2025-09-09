
let score = 0

const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const rock = document.querySelector(".rock")
const gameIcons = document.querySelector(".game-icons")
const playBtn = document.querySelector(".play-btn")
const allGameIcons = document.querySelectorAll(".img-game-icons")
const winOrLose = document.querySelector(".win-or-lose")


const rulesGame = document.querySelector(".rules-btn")
const modalRules = document.querySelector(".modal-rules")
const backModal = document.querySelector(".back-modal")
const modalCOntent = document.querySelector(".center-div")

rulesGame.addEventListener("click", ()=>{
    modalRules.classList.remove("hide")
})
backModal.addEventListener("click", ()=>{
    modalRules.classList.add("hide")
})

modalCOntent.addEventListener("click", (e)=>{
    e.stopPropagation()
})
modalRules.addEventListener("click", ()=>{
    modalRules.classList.add("hide")
})

playBtn.disabled = true

allGameIcons.forEach((element, index) => {
    element.addEventListener("click", () => {
        for (let i = 0; i < allGameIcons.length; i++) {
            allGameIcons[i].classList.remove("active-icons")
        }
        element.classList.add("active-icons")
        playBtn.disabled = false
    })
})





const allNextIcons = document.querySelectorAll(".img-next-icons")
const computerCHoice = document.querySelectorAll(".computer-icons")
const drawH1 = document.querySelector(".draw")

const circle = document.querySelector(".circle-div")


const yourScore = document.querySelector(".your-score")

playBtn.addEventListener("click", () => {
    playBtn.disabled = true
    gameIcons.classList.add("hide")

    let selectedIndex = -1
    for (let i = 0; i < allGameIcons.length; i++) {
        if (allGameIcons[i].classList.contains("active-icons")) {
            selectedIndex = i
        }
    }
    if (selectedIndex === -1) return;

    circle.classList.remove("hide")
    allNextIcons.forEach((element) => {
        element.classList.add("hide")
    })
    allNextIcons[selectedIndex].classList.remove("hide")

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * computerCHoice.length);
        computerCHoice[randomIndex].classList.remove("hide")
        circle.classList.add("hide")

        const userChoice = Array.from(allGameIcons[selectedIndex].classList).find(cls =>
            ["rock", "paper", "scissor"].includes(cls)
        )

        const compChoice = Array.from(computerCHoice[randomIndex].classList).find(cls =>
            ["rock", "paper", "scissor"].includes(cls)
        )

        let result = ""


        if (userChoice === compChoice) {
            result = "DRAW"
            score += 1
            yourScore.textContent = score
            console.log(score)
        } else if (
            (userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "scissor" && compChoice === "paper") ||
            (userChoice === "paper" && compChoice === "rock")
        ) {
            result = "YOU WIN"
            score += 2
            yourScore.textContent = score
            console.log(score)
        } else {
            result = "YOU LOSE"
            console.log(score)
        }

        drawH1.textContent = result

        setTimeout(() => {
            winOrLose.classList.remove("hide")
        }, 800)

    }, 2000)
})


const playAGain = document.querySelector(".play-again")

playAGain.addEventListener("click", ()=>{
    gameIcons.classList.remove("hide")
    allNextIcons.forEach((element, index) =>{
        element.classList.add("hide")
        computerCHoice[index].classList.add("hide")
    })
    winOrLose.classList.add("hide")
})

