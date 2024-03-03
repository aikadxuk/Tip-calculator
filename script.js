const valueToCalculate = document.querySelector('#value-to-calculate')
const numberOfPeople = document.querySelector('#number-of-people')

const buttonsPercent = document.querySelectorAll('.percent-button')
const customPercent = document.querySelector('.custom-percent-input')

const totalTipResult = document.querySelector('#amount-person-result')
const totalTipPerPerson = document.querySelector('#total-person-result')

const resetValues = document.querySelector('.reset-values')

let totalTip
let roundedValue
let roundedTotalTipValue
let totalPercent

buttonsPercent.forEach(function (button, index) {
     button.addEventListener('click', () => {
          let totalValue = valueToCalculate.value
          let totalPerson = numberOfPeople.value
          if (index === 0 && totalValue > 0 && totalPerson > 0) {
               totalTip = 5 / 100 * totalValue
               roundedTotalTipValue = totalTip.toFixed(2)
               totalTipResult.innerHTML = `$ ${roundedTotalTipValue}`
               totalPercent = totalTip / totalPerson
               roundedValue = totalPercent.toFixed(2)
               totalTipPerPerson.innerHTML = `$ ${roundedValue}`
          } else if (index === 1 && totalValue > 0 && totalPerson > 0) {
               totalTip = 10 / 100 * totalValue
               roundedTotalTipValue = totalTip.toFixed(2)
               totalTipResult.innerHTML = `$ ${roundedTotalTipValue}`
               let totalPercent = totalTip / totalPerson
               roundedValue = totalPercent.toFixed(2)
               totalTipPerPerson.innerHTML = `$ ${roundedValue}`
          } else if (index === 2 && totalValue > 0 && totalPerson > 0) {
               totalTip = 15 / 100 * totalValue
               roundedTotalTipValue = totalTip.toFixed(2)
               totalTipResult.innerHTML = `$ ${roundedTotalTipValue}`
               totalPercent = totalTip / totalPerson
               roundedValue = totalPercent.toFixed(2)
               totalTipPerPerson.innerHTML = `$ ${roundedValue}`
          } else if (index === 3 && totalValue > 0 && totalPerson > 0) {
               totalTip = 25 / 100 * totalValue
               roundedTotalTipValue = totalTip.toFixed(2)
               totalTipResult.innerHTML = `$ ${roundedTotalTipValue}`
               totalPercent = totalTip / totalPerson
               roundedValue = totalPercent.toFixed(2)
               totalTipPerPerson.innerHTML = `$ ${roundedValue}`
          } else if (index === 4 && totalValue > 0 && totalPerson > 0) {
               totalTip = 50 / 100 * totalValue
               roundedTotalTipValue = totalTip.toFixed(2)
               totalTipResult.innerHTML = `$ ${roundedTotalTipValue}`
               totalPercent = totalTip / totalPerson
               roundedValue = totalPercent.toFixed(2)
               totalTipPerPerson.innerHTML = `$ ${roundedValue}`
          }
     })
})

customPercent.addEventListener('keyup', () => {
     let valueToCalculateInput = valueToCalculate.value
     let totalPersonInput = numberOfPeople.value
     let customPercentInput = customPercent.value
     if (customPercentInput > 0 && valueToCalculateInput > 0 && totalPersonInput > 0) {
          totalTip = customPercentInput / 100 * valueToCalculateInput
          roundedTotalTipValue = totalTip.toFixed(2)
          totalTipResult.innerHTML = `$ ${roundedTotalTipValue}`
          totalPercent = totalTip / totalPersonInput
          roundedValue = totalPercent.toFixed(2)
          totalTipPerPerson.innerHTML = `$ ${roundedValue}`
     }
})

resetValues.addEventListener('click', () => {
     let inputPeopleReset = numberOfPeople.value
     let totalValueReset = valueToCalculate.value
     if (inputPeopleReset > 0 || totalValueReset > 0) {
          totalTipResult.innerHTML = `$0.00`
          totalTipPerPerson.innerHTML = `$0.00`
     }
})