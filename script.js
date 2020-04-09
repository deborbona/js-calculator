var halfButton = document.getElementById("half-button");
var fortuneButton = document.getElementById("fortune-button");
var restyleButton = document.getElementById("restyle-button");
var fortuneOutputElement = document.getElementById("fortune-output");

halfButton.addEventListener("click", halfNumber);

function halfNumber() {
  var number = document.getElementById("half-input").value;
  numberHalf = number / 2;
  alert("Half of " + number + " is " + numberHalf);
}

fortuneButton.addEventListener("click", fortune);

function fortune() {
  var name = document.getElementById("fortune-input").value;
  var possibleFortunes = ["'Tis a good day for you :)", "'Tis a very bad day for you :(", "'Tis a solid 'okay' day for you :|"];
  var fortuneOutput = possibleFortunes[Math.floor(Math.random() * possibleFortunes.length)];
  fortuneOutputElement.innerText = "Dear " + name + ", your fortune for today is: " + fortuneOutput;
}

restyleButton.addEventListener("click", restyle);

function restyle() {
  var colours = ["#FFD0BA", "#B38570", "#FFE1D4", "#FF9C6E"];
  var randomColour = colours[Math.floor(Math.random() * colours.length)];
  var styles = ["normal", "italic", "oblique"];
  var randomStyle = styles[Math.floor(Math.random() * styles.length)];
  var sizes = ["20px", "50px", "80px", "100px", "120px", "140px", "160px"];
  var randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  fortuneOutputElement.style.color = randomColour;
  fortuneOutputElement.style.fontSize = randomSize;
  fortuneOutputElement.style.fontStyle = randomStyle;
}
