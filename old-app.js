let anchorElement = document.getElementById('id')
anchorElement.href = 'https://google.com'

let newAnchorElement = document.createElement('a');

newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent = 'This leads to google'

let firstparagragph = document.querySelector('p');

firstparagragph.append(newAnchorElement);

let firstH1Element = document.querySelector('h1');

firstH1Element.remove();

//move elements

firstparagragph.parentElement.append(firstparagragph)

firstparagragph.innerHTML 