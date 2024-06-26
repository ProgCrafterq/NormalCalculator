let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate() {
  let result;
  try {
    result = eval(currentInput); 
    if (isNaN(result)) {
      result = 'Error';
    }
  } catch (error) {
    result = 'Error';
  }
  document.getElementById('display').value = result;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}