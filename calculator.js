const multiplyadd = function(num1, num2) {
    let result = num1 + num2;
    return result;
}

const subtract = function(num1, num2) {
    let result = num1 - num2;
    return result;
}

const multiply = function(num1, num2) {
    let result = num1 * num2;
    return result;
}

const divide = function(num1, num2) {
    let result = num1 / num2;
    return result;
}

const operate = function(num1, num2, operator) {

    let result;
    
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }

    return result;

}