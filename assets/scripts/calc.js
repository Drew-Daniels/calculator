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
    let sign;
    let n1;
    let op;
    let n2;
    let result;
    let parts = mathStr.split(/([\+\*\-\/])/);
    if (parts.length === 5) {    //'-96-9' => ['', '-', '96', '-', '9']
        [sign, n1, op, n2] = [parts[1], parts[2], parts[3], parts[4]]
    } else {                     //'96-9' => ['96','-','9']
        [n1, op, n2] = [parts[0], parts[1], parts[2]];
        [n1, n2] = [n1, n2].map(x => parseFloat(x));
    }

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
        case (op === "/"):
            method = divide;
    }
    if (sign) {
        result = String(Math.round(method(-n1, +n2)*100000)/100000);
    } else {
        result = String(Math.round(method(+n1, +n2)*100000)/100000);
    }
    
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

function getFirstChar() {
    let firstChar;
    if (displayStr === '') {
        firstChar = '';
    } else {
        firstChar = displayStr.slice(0,1);
    }
    return firstChar;
}

function altDisplayParse(disStr) {
        
        let parts = disStr.split(altDisplayRegex);
        let str = parts[1];
        if (str) {
            return str;
        } else return "";
}

function mainDisplayParse(disStr) {
    if (!(disStr === ERROR_MSG)) {
        let parts = disStr.split(mainDisplayRegex);
        if (parts[1] !== undefined) {
            str = parts[1]
        } else {
            str = parts[2]
        }
        if (str) {
            return str;
        } else return "";
    } else {
        return ERROR_MSG;
    }
}

const mainDisplay = document.querySelector('#MAIN-display-text');
const altDisplay = document.querySelector('#ALT-display-text');
const mainDisplayRegex = /(^[\-]?\d*[.]*\d*)$|(\d*)$/;
const altDisplayRegex = /(^([\-]?\d*\.\d*[\+\-\*\/])|^([\-]?\d*[^\.][\+\-\*\/]))/;
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
    let ch = b.firstChild.textContent;
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
        // if displayStr is blank, do not tack on an operator, unless '-'
        if (displayStr === '') {
            if (ch === '-') {
                displayStr = '-';
            } else {
                return;
            }
        }
        // if lastDisplayCh is operator, replace with ch
        else if (operators.includes(lastDisplayCh)) {
            displayStr = displayStr.slice(0,-1) + ch;
        } else {
            // if displayStr already has operator, send
            if (/[\+\*\-\/]/.test(displayStr)) {
                let firstDisplayChar = getFirstChar();
                if (firstDisplayChar === '-') {
                    displayStr = displayStr + ch;
                } else {
                    displayStr = operate(displayStr) + ch;
                }
            // set displayStr to calculated result + ch
            // if displayStr does NOT already have an operator
            } else {
                displayStr = displayStr + ch;
            }
        }
    }
    // Scenario 4 - ch is EQUALS sign
    else if (bId === 'equals') {
        // operate(displayStr)
        if (!(/\d*[\+\*\-\/]\d*/.test(displayStr))) {
            return;
        } else {
            displayStr = operate(displayStr);
        }
    }
    // Scenario 5 - ch is DECIMAL pt
    else if (ch === '.') {
        if(!displayStr) {
            displayStr = ch;
        } else {
            let lastNumArr = displayStr.split(/[\-\+\*\/]/)
                                       .filter(Boolean)
                                       .slice(-1);
            lastNum = lastNumArr[0];
            if (!(lastNum.includes(ch))) {
                displayStr += ch;
            }
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
    } else if (key == '.') {
        btn = document.getElementById('decimal');
    }
    if (btn) {
        btn.click();
    }
})


