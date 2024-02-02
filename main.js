function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    if (second === 0) {
        return "ERROR"
    } else {
        return (first / second).toFixed(2);
    };
}

function operate(first, second, operator) {
    if (operator === '+') {
        return add(first, second);
    } else if (operator === '-') {
        return subtract(first, second);
    } else if (operator === '*') {
        return multiply(first, second);
    } else if (operator === '/') {
        return divide(first, second);
    } else {
        return 'ERROR'
    }
};

let invisibleBtns = document.querySelectorAll('.invisble')
for (let i = 0; i < invisibleBtns.length; i++) {
        invisibleBtns[i].disabled = true;
};




