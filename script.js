let cash
let people
let fivePercent = document.querySelector('.button-1').addEventListener('click', fiveCalculate)
let tenPercent = document.querySelector('.button-2').addEventListener('click', tenCalculate)
let fifteenPercent = document.querySelector('.button-3').addEventListener('click', fifteenCalculate)
let twentyfivePercent = document.querySelector('.button-4').addEventListener('click', twentyfiveCalculate)
let fiftyPercent = document.querySelector('.button-5').addEventListener('click', fiftyCalculate)
let custom = document.querySelector('.button-6')
const reset = document.querySelector('#reset').addEventListener('click', resetButton)
let tipAmount = document.querySelector('#peopleamount-tip')
let totalAmount = document.querySelector('#peopletotal-tip')

function fiveCalculate(){
     cash = document.querySelector('.cash').value
     people = document.querySelector('.people').value

     let calculateEach = cash / people * 5 / 100
     calculateEach = calculateEach.toFixed(2)
     tipAmount.innerHTML = `$${calculateEach}`

     let calculateTotal = cash / people * 5 / 100 * 5
     calculateTotal = calculateTotal.toFixed(2)
     totalAmount.innerHTML = `$${calculateTotal}`
}

function tenCalculate(){
     cash = document.querySelector('.cash').value
     people = document.querySelector('.people').value

     let calculateEach = cash / people * 10 / 100
     calculateEach = calculateEach.toFixed(2)
     tipAmount.innerHTML = `$${calculateEach}`

     let calculateTotal = cash / people * 10 / 100 * 5
     calculateTotal = calculateTotal.toFixed(2)
     totalAmount.innerHTML = `$${calculateTotal}`
}

function fifteenCalculate(){
     cash = document.querySelector('.cash').value
     people = document.querySelector('.people').value

     let calculateEach = cash / people * 15 / 100
     calculateEach = calculateEach.toFixed(2)
     tipAmount.innerHTML = `$${calculateEach}`

     let calculateTotal = cash / people * 15 / 100 * 5
     calculateTotal = calculateTotal.toFixed(2)
     totalAmount.innerHTML = `$${calculateTotal}`
}

function twentyfiveCalculate(){
     cash = document.querySelector('.cash').value
     people = document.querySelector('.people').value

     let calculateEach = cash / people * 25 / 100
     calculateEach = calculateEach.toFixed(2)
     tipAmount.innerHTML = `$${calculateEach}`

     let calculateTotal = cash / people * 25 / 100 * 5
     calculateTotal = calculateTotal.toFixed(2)
     totalAmount.innerHTML = `$${calculateTotal}`
}

function fiftyCalculate(){
     cash = cash = document.querySelector('.cash').value
     people = document.querySelector('.people').value

     let calculateEach = cash / people * 50 / 100
     calculateEach = calculateEach.toFixed(2)
     tipAmount.innerHTML = `$${calculateEach}`

     let calculateTotal = cash / people * 50 / 100 * 5
     calculateTotal = calculateTotal.toFixed(2)
     totalAmount.innerHTML = `$${calculateTotal}`
}

function resetButton(){
     cash = document.querySelector('.cash').value = ''
     people = document.querySelector('.people').value = ''
     tipAmount.innerHTML = `$0.00`
     totalAmount.innerHTML = `$0.00`
}