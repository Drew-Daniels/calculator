function add(n1, n2) {
    return (n1 + n2);
  };
  
function subtract(n1, n2) {
    return (n1 - n2);
};

function sum(nums) {
    let sum;
    if (nums.length > 0) {
    sum = nums.reduce(add);
    } else (sum = 0);
    return sum;
};

function multiply(n1, n2) {
    return (n1 * n2);
};

function divide(n1, n2) {
    return (n1 / n2);
};

function operate(mathStr) {
    let n1;
    let op;
    let n2;
    let result;
    let parts = mathStr.split(/(\d*)/);
    [n1, op, n2] = [parts[1], parts[2], parts[3]];
    [n1, n2] = [n1, n2].map(x => parseInt(x))
    let method;
    switch (true) {
        case (op === "+"):
            method = add;
            break;
        case (op === "-"):
            method = subtract;
            break;
        case (op === "*"):
            method = multiply;
            break;
        case (op === "/"):// add snarky comment for division by 0 here
            method = divide;
    }
    result = String(
                    Math.round(method(n1, n2)*100000)/100000)
    if (result === 'NaN' || result === 'Infinity' || result ==='undefined') {
        return ERROR_MSG;
    } else {
        return result;
    }
}

function writeDisplay(num) {
    let str = String(num)
    display.textContent(str)
}

function getLastChar() {
    let lastChar;
    if (displayStr === '') {
        lastChar = '';
    } else {
        lastChar = displayStr.slice(-1);
    }
    return lastChar;
}

function altDisplayParse(disStr) {
        let parts = disStr.split(/([\d.\d]+[\+\*-\/]+)/);
        let str = parts[1];
        if (str) {
            return str;
        } else return "";
}

function mainDisplayParse(disStr) {
    if (!(disStr === ERROR_MSG)) {
        let parts = disStr.split(/(\d*[.]*\d*)/);
        let str = parts.slice(-2,-1);
        if (str) {
            return str;
        } else return "";
    } else {
        console.log(displayStr);
        return ERROR_MSG;
    }
}

const mainDisplay = document.querySelector('#MAIN-display-text');
const altDisplay = document.querySelector('#ALT-display-text');
const operatorKey = document.querySelector('#operatorKey');
const btnNodeList = document.querySelectorAll('button');
const btns = [...btnNodeList];
const ERROR_MSG = 'You Broke Me!'
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operators = ['+', '-', '*', '/'];
let numsAndOps = numbers.concat(operators);

let displayStr = '';

// Add on click events
btns.forEach(b => b.addEventListener('click', function() {
    let ch = b.innerText;
    let bId = b.id;
    // Scenario 1 - clear out ERROR_MSG if present
    if (displayStr === ERROR_MSG) {
        displayStr = '';
    }

    // Scenario 1 - ch is DEL or CLR
    if (ch === 'DEL') {
        if (displayStr === '') {
            return;
        } else {
            displayStr = displayStr.slice(0, -1);
        }
    }
    else if (ch === 'CLR') {
        displayStr = '';
    }
    // Scenario 2 - ch is a NUMBER
    else if (numbers.includes(ch)) {
        displayStr = displayStr + ch;
    }
    // Scenario 3 - ch is an OPERATOR
    else if (operators.includes(ch)) {
        lastDisplayCh = getLastChar();
        // if displayStr is blank, do not tack on an operator
        if (displayStr === '') {
            return;
        }
        // if lastDisplayCh is operator, replace with ch
        else if (operators.includes(lastDisplayCh)) {
            displayStr = displayStr.slice(0,-1) + ch;
        } else {
            // if displayStr already has operator, send
            if (/[+*-\/]/.test(displayStr)) {
                displayStr = operate(displayStr) + ch;
                // set displayStr to calculated result + ch
            // if displayStr does NOT already have an operator
            } else {
                displayStr = displayStr + ch;
            }
        }
    }
    else if (bId === 'equals') {
        // operate(displayStr)
        if (!(/\d*[+*-\/]\d*/.test(displayStr))) {
            return;
        } else {
            displayStr = operate(displayStr);
        }
    }

    mainDisplay.innerText = mainDisplayParse(displayStr);
    altDisplay.innerText = altDisplayParse(displayStr);

}))
// add functionality to detect keystrokes also
document.addEventListener('keydown', (e) => {
    let btn;
    let key = e.key;
    if (numsAndOps.includes(key) || key === '=') {
        btn = document.getElementById(key);
    } else if (key == '='||key == 'Enter') {
        btn = document.getElementById('equals');
    } else if (key == 'Backspace') {
        btn = document.getElementById('deleteBtn');
    }
    if (btn) {
        btn.click();
    }
})


