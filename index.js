var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum1)

var randomImage = "dice" + randomNum1 + ".png";
var imageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var randomImage2 = "dice" + randomNum2 + ".png";
var imageSource = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource);


function winner(randomNum1, randomNum2) {
  if (randomNum1 > randomNum2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins";
  } else if (randomNum1 < randomNum2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins";
  } else {
      document.querySelectorAll("h1")[0].innerHTML = "Draw";
  }
}

winner(randomNum1, randomNum2);
