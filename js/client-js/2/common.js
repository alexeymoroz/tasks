// Даны N инпутов с классом .num и кнопка.
// По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".
window.onload = function() {
  const inputs = document.getElementsByClassName("num");
  const button = document.getElementsByTagName("button");
  const buttonAdd = button[0];
  const INCORRECT_VALUE = 'Некорректное значение';
  let resultParagraph = null;

  buttonAdd.addEventListener("click", sumNumbers);

  function sumNumbers() {
    let result = 0;
    for (let i = 0; i < inputs.length; i++) {
      let value = parseInt(inputs[i].value);
      if(isDigit(value)) {
        result += value;
      } else{
        result = INCORRECT_VALUE;
        break;
      }
    }
    createResultParagraph(result);
  }

  function createResultParagraph(value) {
    if (resultParagraph === null) {
      resultParagraph = document.createElement("p");
      resultParagraph.id = "result";
      document.body.appendChild(resultParagraph);
    }

    resultParagraph.innerText = value;
  }

  function isDigit(digit) {
    return /[0-9]+/.test(digit);
  }

  // function f(str){
  //   let arr = str.split(',');
  //   let res = 0;
  //   for(let i = 0; i < arr.length; i++){
  //     res += parseInt(arr[i]);
  //   }
  // }
}








