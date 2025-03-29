let display = document.getElementById("display");

// Append input to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate the square of the current number
function calculateSquare() {
    try {
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = currentValue * currentValue;
        } else {
            display.value = "Error";
        }
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate percentage
function calculatePercentage() {
    try {
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = currentValue / 100;
        } else {
            display.value = "Error";
        }
    } catch (error) {
        display.value = "Error";
    }
}