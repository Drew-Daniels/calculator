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

// function multiply(nums) {
// // expects an array of numbers to be passed
// total = 1;
// for (i=0; i < nums.length; i++) {
//     total *= nums[i];
// }
// return total;
// };

function multiply(n1, n2) {
    return (n1 * n2);
};

function divide(n1, n2) {
    return (n1 / n2);
};

function operate(n1, op, n2) {
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
        case (op === "/"):
            method = divide;
    }
    return method(n1, n2);
}

function writeDisplay(num) {
    let str = String(num)
    display.textContent(str)
}

const mainDisplay = document.querySelector('#MAIN-display-text');
const altDisplay = document.querySelector('#ALT-display-text');
const operatorKey = document.querySelector('#operatorKey');
const btnNodeList = document.querySelectorAll('button');
const btns = [...btnNodeList];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operators = ['+', '-', '*', '/'];
let numsAndOps = numbers.concat(operators);
console.log(numsAndOps);

let mainDisplayStr = ''; //main display
let altDisplayStr = ''; //alternate display

btns.forEach(b => b.addEventListener('click', function() {
    let ch = b.innerText;
    let bId = b.id;
    let lastDisplayCh = mainDisplayStr.slice(0,-1);

    // Scenario 1 - DEL or CLR
    if (bId === 'deleteBtn' || bId === 'clearBtn') {
        if (bId === 'deleteBtn') {
            mainDisplayStr = mainDisplayStr.slice(0,-1);
        } else if(bId === 'clearBtn') {
            [mainDisplayStr, altDisplayStr] = ['','']
        }
    else if (operators.includes(ch)) {
        } if (!(/[\*+-\/]/.test(altDisplayStr))) {
            // Scenario 2 - No operator in altDisplayStr already
            
        } else {
            // Scenario 3 - IS an operator in altDisplayStr already
            if (numbers.includes(ch)) {
                mainDisplayStr = mainDisplayStr + ch;
            } else if (operators.includes) {

            }
        }
    }

    
    mainDisplay.innerText = mainDisplayStr;
    altDisplay.innerText = altDisplayStr;
}))
// add functionality to detect keystrokes also


//create a function to append all button clicks to a common string
//where we can use regex to parse out the numbers separated by an operator
//followed by another number
const lineBreak = () => console.log('-'.repeat(40))
const funcDesc = (func) => console.log(`-------------${func}-------------`)

function selfTest() {
    funcDesc('ADD')
    console.log(add(2, 4));
    console.log(add(50, 50));
    funcDesc('SUBTRACT')
    console.log(subtract(2, 4));
    console.log(subtract(100, 50));
    funcDesc('MULTIPLY');
    console.log(multiply(2, 4));
    console.log(multiply(100, 50));
    funcDesc('DIVIDE');
    console.log(divide(4, 2));
    console.log(divide(100, 50));
    funcDesc('OPERATOR');
    console.log(operate('2','+','2'))
    console.log(operate('2','-','2'))
    console.log(operate('2','*','2'))
    console.log(operate('2','/','2'))
}

selfTest();

