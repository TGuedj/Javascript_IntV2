let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remainig-chars');

let maxAllowedChars = productNameInputElement.maxlength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;
    remainingCharsElement.textContent = remainingCharacters

}

productNameInputElement.addEventListener('input')