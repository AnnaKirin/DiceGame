// let output = [];

// function fillArray() {
//   for (i = 0; i < 6; i++) {
//     output[i] = Math.floor(Math.random() * 6 + 1);
//   }
//   console.log(output);
// }

// fillArray();

function newSrc() {
  let number1 = Math.floor(Math.random() * 6 + 1);
  let image1 = document.querySelector("#imgPlayer1");
  image1.src = "./images/dice" + number1 + ".png";

  let number2 = Math.floor(Math.random() * 6 + 1);
  let image2 = document.querySelector("#imgPlayer2");
  image2.src = "./images/dice" + number2 + ".png";
}
