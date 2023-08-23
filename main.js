let sumValue = document.querySelector(".calculator_value");
let sum = document.querySelector(".sum");
let minus = document.querySelector(".minus");
let keys = [...document.querySelectorAll(".calculator_key")];
let first = document.querySelector(".first_number");
let second = document.querySelector(".second_number");
let reset = document.querySelector(".reset")


keys.map((el) => {
    el.addEventListener("click", () => {
        first.innerHTML = parseInt(el.innerHTML)
        second.innerHTML = parseInt(el.innerHTML)
    })
})


sum.addEventListener("click", () => {
    sumValue.innerHTML = parseInt(first.innerHTML) + parseInt(second.innerHTML)
})

minus.addEventListener("click", () => {
    sumValue.innerHTML = parseInt(first.innerHTML) - parseInt(second.innerHTML)
})

reset.addEventListener("click", () => {
    sumValue.innerHTML = parseInt(sumValue.innerHTML) - parseInt(sumValue.innerHTML)
})






