var numberOfSquares = 3;
var color;
var correctAnswer;
document.getElementById('win').style.display = 'none';

// SELECT ALL SQUARES
var square = document.getElementsByClassName('square');

// START GAME
playGame();

//---------------------------- FUNCTIONS ---------------------------

// PLAY GAME
function playGame() {

  if (numberOfSquares > 12) {
    document.getElementById('win').style.display = 'inline';
  } else {

    color = getColors(numberOfSquares);
    createSquares(numberOfSquares);
    correctAnswer = pickColor();

    // SET ALL SQUARES COLORS
    for (var i = 0; i < square.length; i++) {
      square[i].style.backgroundColor = color[i];

      // CLICK EVENT LISTENER
      square[i].addEventListener('click', function () {

          // GET CLICKED SQUARE COLOR
          var clickedSquare = this.style.backgroundColor;

          // IF CORRECT, ALERT TO USER AND PREPARE FOR NEXT ROUND
          if (clickedSquare === correctAnswer) {
            alert('correct');

            // REMOVE ALL SQUARES BEFORE NEXT ROUND
            for (var i = square.length - 1; i >= 0; i--) {
              square[i].remove();
            }

            // ADD NUMBER OF SQUARES FOR NEXT ROUND
            numberOfSquares += 3;

            // RECURSION, PLAY NEXT ROUND
            playGame();
          } else {
            // IF IS NOT CORRECT COLOR, THEN REMOVE FALSE SQUAREs
            this.style.display = 'none';
          }
        }); // END EVENT
    } // END FOR LOOP

    // SET RGB TEXT TO GUESS THE COLOR
    document.getElementById('RGBColor').textContent = correctAnswer;
  }
}

// CREATE SQUARES ON GIVEN NUMBER PARAMETER
function createSquares(numberOfSquares) {
  for (var i = 0; i < numberOfSquares; i++) {
    var newNode = document.createElement('div');
    newNode.className = 'square';
    document.getElementById('right').appendChild(newNode);
  }
}

// PICK ONE COLOR OF COLOR ARRAY AS CORRECT
function pickColor() {
  return (color[Math.floor(Math.random() * color.length)]);
}

// GENERATE RANDOM RGB COLOR
function randomRGBColor() {
  // RANDOM RED
  var r = Math.floor(Math.random() * 256);

  // RANDOM GREEN
  var g = Math.floor(Math.random() * 256);

  // RANDOM BLUE
  var b = Math.floor(Math.random() * 256);

  // RETURN RGB STRING
  return ("rgb(" + r + ", " + g + ", " + b + ")");
}

// GET RANDOM COLORS
function getColors(number) {
  // DECLARE ARRAY
  var colorsArray = [];

  // FILL ARRAY WITH RGB COLORS
  for (var c = 0; c < number; c++) {
    colorsArray.push(randomRGBColor());
  }

  // RETURN ARRAY
  return colorsArray;
}
