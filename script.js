var halfButton = document.getElementById("half-button");
var fortuneButton = document.getElementById("fortune-button");
var restyleButton = document.getElementById("restyle-button")

halfButton.addEventListener("click", halfNumber);

function halfNumber() {
  var number = document.getElementById("half-input").value;
  numberHalf = number / 2;
  alert("Half of " + number + " is " + numberHalf);
}

fortuneButton.addEventListener("click", fortune);

function fortune() {
  var name = document.getElementById("fortune-input").value;
  var fortune = document.getElementById("fortune-output").value;
  var possibleFortunes = ["'Tis a good day for you :)", "'Tis a very bad day for you :(", "'Tis a solid 'okay' day for you :|"];
  var fortuneOutput = possibleFortunes[Math.floor(Math.random() * possibleFortunes.length)];
  alert("Dear " + name + ", your fortune for today is: " + fortuneOutput);
}

restyleButton.addEventListener("click", restyle);

function restyle() {
  var restyleOutput = get.getElementById("restyle-output").value;
  var colours = ["blue", "red", "green", "yellow"];
  var randomColour = colours[Math.floor(Math.random() * colours.length)];
  restyleOutput.style.color = randomColour;
}
