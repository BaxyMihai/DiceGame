function randomRoll() {
  //Create a variable named randomNumber1 and set the value to a random number between 1 and 6
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  //Get image element by its class name
  var img1 = document.querySelector(".img1");

  //Set the src attribute of img1 based on the random number
  img1.src = "./images/dice" + randomNumber1 + ".png";

  //Do the same for the othe dice
  //Create a variable named randomNumber1 and set the value to a random number between 1 and 6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  //Get image element by its class name
  var img2 = document.querySelector(".img2");

  //Set the src attribute of the img2 based on the random number.
  img2.src = "./images/dice" + randomNumber2 + ".png";

  /*Change the text in the h1, (which currently says Refresh Me) to show which user won or if 
there was a draw depending on the dice values of player 1 (left) and player 2 (right).*/
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
  }
}
