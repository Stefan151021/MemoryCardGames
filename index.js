const symbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊']
let main = document.querySelector(".main")


const hodnoty = symbols.map(sybol => {
    const newDiv = document.createElement("div")
    newDiv.dataset.isActive = "false"
    newDiv.textContent = "?"
    newDiv.className = "card"
    main.appendChild(newDiv)
    return newDiv.textContent
})


main.addEventListener("click",function (e){
    /*Menim data set z false na true */
    console.log(e.target.dataset)
    e.target.dataset.isActive ="true"
    console.log(e.target.dataset)
})

