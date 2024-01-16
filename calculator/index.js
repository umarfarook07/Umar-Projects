let calculateValue = "";

function updateValue(value) {
    calculateValue+=value; 
    document.querySelector('.js-input-display').value = calculateValue;
}

function calculateResults() {          
     try {
        let result = eval(calculateValue);
        document.querySelector('.js-input-display').value = result;
        calculateValue = result;
    } catch (error) {        
       document.querySelector('.js-input-display').value  = 'Error';
    }
}

function clearConsole() {
    calculateValue = "";
    document.querySelector('.js-input-display').value = calculateValue;
}

function backspace() {
    calculateValue = calculateValue.slice(0, -1);
    document.querySelector('.js-input-display').value = calculateValue;

}
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (/[0-9+\-*/.=]|Enter|Backspace|Delete/.test(key)) {
        event.preventDefault();
        handleKeyboardInput(key);
    }
});

function handleKeyboardInput(key) {
    switch (key) {
        case 'Enter':
        case '=':
            calculateResults();
            break;
        case 'Backspace':
        case 'Delete':
            backspace();
            break;
        default:
            updateValue(key);
            break;
    }
}
