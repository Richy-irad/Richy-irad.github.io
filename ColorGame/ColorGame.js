var numSquares = 6;
var colors = []
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.getElementsByClassName("mode");


init();

function init(){
  setModeButtonListeners();
  setUpSquares();
  reset();
}

function setModeButtonListeners(){
  // modeButtons event listeners
  for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      //figure out how many squares to show
      if(this.textContent === "Easy"){
        numSquares = 3;
      }
      else{
        numSquares = 6;
      }
      reset();
    });
  }
}

function setUpSquares(){
  for(var i=0; i<squares.length; i++){
    //Add event listeners to squares
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again";
      }
      else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}
function reset(){
  // generate all new Colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change the text content of the reset button
  resetButton.textContent = "New Colors";
  //change colors of squares
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
  //change the background color of the h1
  h1.style.backgroundColor = "steelblue";
  //set the message display to nonething
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
  this.textContent = "New Colors";
  // generate all new Colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i=0; i<squares.length; i++){
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  //change the background color of the h1
  h1.style.backgroundColor = "steelblue";
  //set the message display to nonething
  messageDisplay.textContent = "";
});




function changeColors(color){
  //Loop through all the squares
  for(var i=0; i<squares.length; i++){
    //Change each color to match the given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb("+r+", "+g+", "+b+")"
}

function generateRandomColors(num){
  //make an array
  var arr = []
    //add num random colors to the array
  for(var i=0; i<num; i++){
    // get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb("+r+", "+g+", "+b+")";
}
