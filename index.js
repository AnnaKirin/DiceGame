//func newsrc must return picture and text

function newSrc() {
  let number1 = Math.floor(Math.random() * 6 + 1);
  let image1 = document.querySelector("#imgPlayer1");
  image1.src = "./images/dice" + number1 + ".png";

  let number2 = Math.floor(Math.random() * 6 + 1);
  let image2 = document.querySelector("#imgPlayer2");
  image2.src = "./images/dice" + number2 + ".png";

  if (number1 > number2) {
    console.log("Player 1 win!");
  } else if (number1 === number2) {
    console.log("Draw!");
  } else {
    console.log("Player 2 win!");
  }
}
