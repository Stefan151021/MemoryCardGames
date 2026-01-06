const symbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊']
const main = document.querySelector(".main")
const h1text = document.querySelector(".h1text")
let score = 0
let activeCards = []
let canClick = true

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledSymbols = shuffleArray(symbols);

const hodnota = shuffledSymbols.map(symbol => {
    const newDiv = document.createElement("div")
    newDiv.className = "card"
    newDiv.dataset.symbol = symbol
    newDiv.textContent = "?"
    main.appendChild(newDiv)
    return newDiv
})


hodnota.forEach(element => {
    element.addEventListener("click",() => {
        if (!canClick) return

        if (element.textContent ==="?"){
            element.textContent = element.dataset.symbol
            activeCards.push(element)

        }

        checkCards()

    })
})


function checkCards() {
    if (activeCards.length ===2){
        canClick = false

        checkGame()
        activeCards = []

    }
}


function checkGame() {



        const [karta1,karta2] = activeCards

    if (karta1.dataset.symbol === karta2.dataset.symbol){
        karta1.textContent = karta1.dataset.symbol
        karta2.textContent = karta2.dataset.symbol


        score ++
        h1text.textContent = score
        canClick = true
        console.log(canClick)

    } else {

        setTimeout(() => {
            karta1.textContent = "?"
            karta2.textContent = "?"
            canClick = true
        },1400)


    }

}

