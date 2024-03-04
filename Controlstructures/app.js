let paragraphElement = document.querySelector('p');

function changeParagraphText(event) {
  paragraphElement.textContent = 'Clicked!';
  console.log('Paragraph clicked!');
  console.log(event);
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  let enteredText = event.target.value;
  // let enteredText = event.data; => This is different!
  console.log(enteredText);
  // console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);




// var temp = xyz;
// var constans = ABCDEFG;

// let
// const

//app.use('/test', checkIP, (req, res, next) => {
//  const date = new Date();
//console.log("*****  enter test  ***** " + date);
//res.send("test working");
// res.status(201).json({
//     message: 'Room Added',
// });
//});
