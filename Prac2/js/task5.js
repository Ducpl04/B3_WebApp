function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    const product = num1 * num2;
    document.getElementById('result').textContent = `The answer of multiplication is: ${product}`;
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    if (num2 === 0) {
        document.getElementById('result').textContent = "Division by zero is not allowed.";
        return;
    }

    const quotient = num1 / num2;
    document.getElementById('result').textContent = `The answer of division is: ${quotient}`;
}