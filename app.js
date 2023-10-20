function appendToInput(value) {
    const inputBox = document.getElementById('inboxnum');
    const inputValue = inputBox.value;

    if (inputValue === '0' || inputValue === 'Error') {
        inputBox.value = ''; // Clear the input box
    }

    if (value.match(/[/*%+-]/) && inputValue.slice(-1).match(/[/*%+-]/)) {
        return; // Don't add another operator
    }

    inputBox.value += value;
}
function clearInput() {
    const inputBox = document.getElementById('inboxnum');
    inputBox.value = ''; // Clear the input box
}
function clearLastCharacter() {
    const inputBox = document.getElementById('inboxnum');
    const inputValue = inputBox.value;

    if (inputValue.length > 0) {
        // Remove the last character
        inputBox.value = inputValue.slice(0, -1);
    }
}
function toggleSign() {
    const inputBox = document.getElementById('inboxnum');
    const inputValue = inputBox.value;

    if (inputValue !== '') {
        // Check if the input is not empty
        const numericValue = parseFloat(inputValue);

        if (!isNaN(numericValue)) {
            // Check if it's a valid number
            const toggledValue = -numericValue;
            inputBox.value = toggledValue;
        }
    }
}

function calculateResult() {
    const inputBox = document.getElementById('inboxnum');
    const inputValue = inputBox.value;

    try {
        // Use the eval function to calculate the result
        const result = eval(inputValue);
        inputBox.value = result !== undefined ? result : "Error"; // Check for undefined result
    } catch (error) {
        inputBox.value = "Error"; // Handle errors
    }
}

function clearResultOnNumberInput() {
    const inputBox = document.getElementById('inboxnum');
    const inputValue = inputBox.value;

    // Check if the last operation was "=" and a number is being entered
    if (inputValue === '0' || inputValue === 'Error') {
        inputBox.value = ''; // Clear the input box
    }
}
