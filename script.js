const count = document.querySelector(".count")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        // console.log("add")
        count.innerHTML++
        setColor()   
    }
    if (e.target.classList.contains("subtract")) {
        // console.log("subtract")
        count.innerHTML--
        setColor()
    }
    if (e.target.classList.contains("reset")) {
        // console.log("reset")
        count.innerHTML = 0
        setColor()
    }
})

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "green"
    } else if (count.innerHTML < 0) {
        count.style.color = "rgb(225, 89, 52)"
    } else {count.style.color = "gold"}
}

// const count = document.querySelector(".count")
// const add = document.querySelector(".add")
// const resetCounter = document.querySelector(".reset")
// const sub = document.querySelector(".subtract")
// const buttons = document.querySelector(".buttons")

