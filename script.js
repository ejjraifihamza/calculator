const calculator = {
  displayValue: "0",
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondNumber } = calculator;
  if (waitingForSecondNumber === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondNumber = false;
    console.log(calculator);
  } else {
    if (digit === "all-clear") {
      calculator.displayValue = "0";
    } else {
      calculator.displayValue =
        displayValue === "0" ? digit : displayValue + digit;
    }
  }
  console.log(calculator);
}

function handleOperator(calculatorOperator) {
  const { displayValue, firstNumber, operator, waitingForSecondNumber } =
    calculator;
  const inputValue = parseInt(displayValue);
  if (firstNumber === null && !isNaN(inputValue)) {
    calculator.firstNumber = inputValue;
  } else if (
    (firstNumber != null,
    displayValue != false,
    operator != null,
    waitingForSecondNumber != true)
  ) {
    // otherNumber = parseInt(calculator.displayValue)
    handelEqual();
  }
  calculator.waitingForSecondNumber = true;
  calculator.operator = calculatorOperator;
  console.log(calculator);
}

function allClear() {
  (calculator.displayValue = "0"),
    (calculator.firstNumber = null),
    (calculator.waitingForSecondNumber = false),
    (calculator.operator = null),
    console.log(calculator);
}

function handelEqual() {
  const { operator } = calculator;
  if (
    calculator.firstNumber !== null &&
    calculator.operator !== null &&
    calculator.waitingForSecondNumber === false &&
    calculator.displayValue != false
  ) {
    secondNumber = parseInt(calculator.displayValue);
    firstNumber = calculator.firstNumber;
    let result = "";
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      default:
        break;
    }
    (calculator.firstNumber = parseInt(result)),
      (calculator.operator = null),
      (calculator.displayValue = `${result}`);
  } else {
    return;
  }
}

function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}
updateDisplay();

function calculate() {}

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    if (target.classList.contains("equal-sign")) {
      handelEqual();
      // updateDisplay();
    } else {
      handleOperator(target.value);
      updateDisplay();
      return;
    }
  }
  if (target.classList.contains("all-clear")) {
    allClear();
    updateDisplay();
  }
  inputDigit(target.value);
  updateDisplay();
});
