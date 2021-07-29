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
    switch (true) {
        case (op === "+"):
            return add(n1, n2);
        case (op === "-"):
            return subtract(n1, n2);
        case (op === "*"):
            return multiply(n1, n2);
        case (op === "/"):
            return divide(n1, n2);
    }
}

const lineBreak = () => console.log('-'.repeat(40))
const funcDesc = (func) => console.log(`-------------${func}-------------`)

function selfTest() {
    lineBreak();
    funcDesc('ADD')
    console.log(add(2, 4));
    console.log(add(50, 50));
    lineBreak();
}

selfTest();


