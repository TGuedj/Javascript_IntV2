let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked";
  console.log("Paragraph clicked!");
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUsetInput(event) {
  let enteredText = inputElement.value;
  console.log(enteredText);
  console.log(event)
}

inputElement.addEventListener("input", retrieveUsetInput);

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
