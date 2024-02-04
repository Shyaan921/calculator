function add(first, second) {
    return +first + +second;
}

function subtract(first, second) {
    return +first - +second;
}

function multiply(first, second) {
    return +first * +second;
}

function divide(first, second) {
    return (+first / +second).toFixed(2);
}

function operate(first, second, operator) {
    if ((first === '') || (second === '') || (!['+', '-', '×', '÷'].includes(operator))) {
        return "ERROR"
    } else if ((second === "0") && (operator === '÷')){
        return "Allah reham kare bhai/baaji aap par"
    }

    if (operator === '+') {
        return add(first, second);
    } else if (operator === '-') {
        return subtract(first, second);
    } else if (operator === '×') {
        return multiply(first, second);
    } else if (operator === '÷') {
        return divide(first, second);
    } 
};

function reset() {
    firstOperator = true
    firstNum = 0
    secondNum = 0
    operator = ''
    equation = ''
    equ.textContent = ''
}

let firstNegative = true
let firstOperator = true;
let firstNum;
let secondNum;
let operator;
let tempOperator;
let equation = '';
let equ = document.querySelector('#equation');
let ans = document.querySelector("#answer");

let invisibleBtns = document.querySelectorAll('.invisble')
for (let i = 0; i < invisibleBtns.length; i++) {
    invisibleBtns[i].disabled = true;
};

let btns = document.querySelectorAll('button')
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        if (btns[i].textContent === 'AC') {
            reset()
            ans.textContent = ''
            previousAnswer = ''
        } else if ((btns[i].textContent === '-') && (!firstNum) && (!operator) && (firstNegative === true)) {
            firstNegative = false
            equ.textContent += btns[i].textContent;
            equation += btns[i].textContent;
        } else if (!['+', '-', '×', '÷', 'AC', '='].includes(btns[i].textContent)) {
            equ.textContent += btns[i].textContent;
            equation += btns[i].textContent;
        } else if (['+', '-', '×', '÷'].includes(btns[i].textContent)) {
            equ.textContent += ' ' + btns[i].textContent + ' ';
            if (firstOperator === true) {
                firstOperator = false
                firstNum = equation;
                operator = btns[i].textContent;
                equation = equation.slice(0, 0)
            } else {
                secondNum = equation
                tempOperator = btns[i].textContent
                firstNum = operate(firstNum, secondNum, operator)
                previousAnswer = firstNum;
                secondNum = 0;
                operator = tempOperator;
                ans.textContent = firstNum
                equation = equation.slice(0, 0)
            }
        } else if (btns[i].textContent === '=') {
            if ((!secondNum) && (!operator)) {
                firstNum = equation;
                ans.textContent = equation
                reset() 
            } else {
                secondNum = equation
                ans.textContent = operate(firstNum, secondNum, operator)
                reset()
            }
        }

    });
};



