function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}
function populateDisplay(input) {
    let display = document.querySelector('.display');
    display.textContent += input;
} 
function operate(a, operator, b) {
    switch(operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}
const calculator = document.querySelector('.calculator');
const numButtons = calculator.querySelectorAll('.number')
const operatorButtons = calculator.querySelectorAll('.operator')
const equalButton = calculator.querySelector('.equal')
const calc = {
    operation: [],
    currentInput: '',
}
numButtons.forEach(button => button.addEventListener('click', (e) => {
    populateDisplay(e.target.textContent);
    calc.currentInput += e.target.textContent;
}))
operatorButtons.forEach(button => button.addEventListener('click', (e) => {
    let operator = e.target.textContent

    populateDisplay(` ${operator} `)
    calc.operation.push(calc.currentInput, operator)
    calc.currentInput = ''
}))
equalButton.addEventListener('click', () => {
    if(!calc.currentInput) {
        return
    }
    calc.operation.push(calc.currentInput)
    console.log(calc.operation)

    calc.operation.find()
})