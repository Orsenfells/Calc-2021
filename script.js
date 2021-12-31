const calculator = document.querySelector('.calculator');
const numButtons = calculator.querySelectorAll('.number');
const operatorButtons = calculator.querySelectorAll('.operator');
const equalButton = calculator.querySelector('.equal');
const clear = calculator.querySelector('.clear');
const calc = {
    prevInput: '',
    operater: '',
    currentInput: '',
    isResult: false,
}
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
    display.textContent = input;
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

numButtons.forEach(button => button.addEventListener('click', (e) => {
    if(calc.isResult) {
        calc.currentInput = e.target.textContent
        calc.isResult = false;
    } else calc.currentInput += e.target.textContent;
    populateDisplay(calc.currentInput);
}))
operatorButtons.forEach(button => button.addEventListener('click', (e) => {
    let operator = e.target.textContent

    calc.prevInput = calc.currentInput
    calc.operator = operator

    calc.currentInput = ''
}))
equalButton.addEventListener('click', () => {
    if(!calc.currentInput || !calc.operator) {
        return
    }
    let a = parseInt(calc.prevInput);
    let b = parseInt(calc.currentInput);
    let operator = calc.operator;
    
    calc.currentInput = operate(a, operator, b);
    calc.isResult = true;
    populateDisplay(calc.currentInput);
    calc.operator = '';
})
clear.addEventListener('click', () => {
    calc.prevInput = '';
    calc.operater = '';
    calc.currentInput = ''
    calc.isResult = false;
    populateDisplay("0")
})