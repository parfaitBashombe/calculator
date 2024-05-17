//CALCULATOR

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function deleteDisplay() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function oddEvenDisplay(x) {
  x = display.value %= 2;
  if (x == 0) {
    display.value = "Even";
  } else {
    display.value = "Odd";
  }
}
