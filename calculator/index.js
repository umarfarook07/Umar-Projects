function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.textContent += value;
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.textContent = '';
}

function backspace() {
    var display = document.getElementById('display');
    var currentInput = display.textContent;
    display.textContent = currentInput.slice(0, -1);
}

function calculateResult() {
    var display = document.getElementById('display');
    var expression = display.textContent;

    // Using eval for simplicity (Note: eval can be unsafe if used with untrusted input)
    try {
        var result = eval(expression);
        display.textContent = result;
    } catch (error) {
        // Handle errors, e.g., division by zero
        display.textContent = 'Error';
    }
}

