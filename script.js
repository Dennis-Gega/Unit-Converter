const inputEl = document.getElementsByClassName("hero-input")[0]
const convertBtn = document.getElementsByClassName("hero-btn")[0]
const lengthEl = document.getElementById("length-p")
const volumeEl = document.getElementById("volume-p")
const massEl = document.getElementById("mass-p")

convertBtn.addEventListener("click", function() {
    if (inputEl.value) {
        const inputValue = inputEl.value
        console.log(inputValue)
        renderLength(inputValue)
        renderVolume(inputValue)
        renderMass(inputValue)
    }
})

function renderLength(value) {
    let valueFt = (value * 3.2808).toFixed(3)
    let valueM = (value / 3.2808).toFixed(3)
    lengthEl.textContent = `${value} meters = ${valueFt} feet | ${value} feet = ${valueM} meters`
}

function renderVolume(value) {
    let valueL = (value / 3.78541).toFixed(3)
    let valueGal = (value * 3.78541).toFixed(3)
    volumeEl.textContent = `${value} liters = ${valueL} gallons | ${value} gallons = ${valueGal} liters`
}

function renderMass(value) {
    let valueKg = (value / 2.20462).toFixed(3)
    let valueLbs = (value * 2.20462).toFixed(3)
    massEl.textContent = `${value} kilograms = ${valueLbs} pounds | ${value} pounds = ${valueKg} kilograms`
}