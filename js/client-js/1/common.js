// Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах 
// и запишите их сумму в четвертый инпут.

window.onload = function() {

	const AMOUNT_OF_INPUTS = 3;

	let inputs = document.getElementsByTagName("input");
	let buttons = document.getElementsByTagName("button");
	let sumButton = buttons[0];
	let clearButton = buttons[1]; 
	let resultInput = null;

	sumButton.addEventListener("click", sumOfInputValues);
	clearButton.addEventListener("click", function() {
		for(let i = 0; i < inputs.length; i++) {
			inputs[i].value = "";
		}
		if(resultInput != null){
				resultInput.remove();
		}
	})

	function sumOfInputValues() {
		let sumOfInputs = 0; 
		for(var i = 0; i < AMOUNT_OF_INPUTS; i++) {
			let inputValue = parseInt(inputs[i].value);
			if(isDigit(inputValue)){
				sumOfInputs += inputValue;
			}
		}
			createInputNode();
			setValue(resultInput, sumOfInputs);
	}

	function createInputNode() {
		if(inputs.length <= AMOUNT_OF_INPUTS) {
			resultInput = document.createElement("input");
			document.body.appendChild(resultInput);
			resultInput.setAttribute("type", "text");
			resultInput.setAttribute("disabled", "");
			resultInput.className = "result";
		}
	}

	function setValue(node, value) {
		if(node !== null){
				node.value = value;
			}
	}

	function isDigit(digit) {
    return /[0-9]+/.test(digit);
  }
};