const symbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊']
const main = document.querySelector(".main")


symbols.map(sybol => {
    const newDiv = document.createElement("div")
    newDiv.className = "card"
    newDiv.textContent = sybol
    main.appendChild(newDiv)
})