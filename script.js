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
const calculatorButtons = calculator.querySelectorAll('button')