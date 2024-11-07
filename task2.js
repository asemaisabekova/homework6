document.getElementById("calculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculate();
});

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result = 0;

    if (!num1 || !num2) {
        result = "Please enter both numbers.";
    } else {
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
        }
    }

    document.getElementById("result").textContent = "Result: " + result;
}
