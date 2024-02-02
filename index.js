//func newsrc must return picture and text

function play() {
  let number1 = Math.floor(Math.random() * 6 + 1);
  let image1 = document.querySelector("#imgPlayer1");
  image1.src = "./images/dice" + number1 + ".png";

  let number2 = Math.floor(Math.random() * 6 + 1);
  let image2 = document.querySelector("#imgPlayer2");
  image2.src = "./images/dice" + number2 + ".png";

  if (number1 > number2) {
    document.querySelector("#title").textContent = "🚩Player 1 win!";
  } else if (number1 === number2) {
    document.querySelector("#title").textContent = "🚩Draw!🚩";
  } else if (number1 < number2) {
    document.querySelector("#title").textContent = "Player 2 win!🚩";
  }
}

function refresh() {
  document.querySelector("#title").textContent = "Try me!";
}
