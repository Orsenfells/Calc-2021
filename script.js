const calculator = document.querySelector('.calculator');
const numButtons = calculator.querySelectorAll('.number');
const operatorButtons = calculator.querySelectorAll('.operator');
const equalButton = calculator.querySelector('.equal');
const clear = calculator.querySelector('.clear');
const undo = calculator.querySelector('.undo');
const decimal = calculator.querySelector('.decimal');
const calc = {
    prevInput: '',
    operater: '',
    currentInput: '',
    decimalToggle: false,
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
    calc.decimalToggle = false
    calc.currentInput = ''
}))
equalButton.addEventListener('click', () => {
    if(!calc.currentInput || !calc.operator) {
        return
    }
    let a = parseFloat(calc.prevInput);
    let b = parseFloat(calc.currentInput);
    let operator = calc.operator;
    
    calc.currentInput = operate(a, operator, b);
    calc.isResult = true;
    populateDisplay(calc.currentInput);
    calc.operator = '';
    calc.decimalToggle = false;
})
clear.addEventListener('click', () => {
    calc.prevInput = '';
    calc.operater = '';
    calc.currentInput = ''
    calc.isResult = false;
    calc.decimalToggle = false;
    populateDisplay("0")
})

undo.addEventListener('click',  () => {
    if (calc.isResult) {
        return
    }
    if (calc.currentInput[calc.currentInput.length - 1] === '.') {
        calc.decimalToggle = false
    }
    calc.currentInput = calc.currentInput.slice(0, -1)
    populateDisplay(calc.currentInput)
    console.log(calc.currentInput)
})
decimal.addEventListener('click', () => {
    if (calc.decimalToggle) {
        return
    }
    if(calc.isResult) {
        calc.decimalToggle = true;
        calc.currentInput = '.'
        calc.isResult = false
    }else {
        calc.decimalToggle = true
        calc.currentInput += "."
    }
    populateDisplay(calc.currentInput)
})