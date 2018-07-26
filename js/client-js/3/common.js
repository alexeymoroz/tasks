//Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

window.onload = function() {
  const input = document.querySelector("input");
  const INCORRECT_VALUE = "Некорректное значение";

  input.addEventListener("mouseout", sumOfDigit);

  function sumOfDigit() {
    let result = 0;
    let targetString = input.value;
    for (let i = 0; i < targetString.length; i++) {
      let digit = parseInt(targetString.charAt(i)); 
      if (isDigit(digit)) {
        result += digit;
      } else {
        input.value = INCORRECT_VALUE;
        return;
      }
    }
    input.value = result;
  }

  function isDigit(digit) {
    return /[0-9]+/.test(digit);
  }
}

