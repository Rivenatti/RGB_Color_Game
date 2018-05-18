var numberOfSquares = 3;
var color;
var correctAnswer;
document.getElementById("win").style.display = 'none';

// SELECT ALL SQUARES
var square = document.getElementsByClassName('square');
    
    playGame();

//---------------------------- FUNCTIONS ---------------------------

// PLAY GAME
function playGame() {

    if(numberOfSquares > 12){
        document.getElementById("win").style.display = "inline";
    } else {

    color = getColors(numberOfSquares);
    createSquares(numberOfSquares);
    correctAnswer = pickColor();

        // SET ALL SQUARES COLORS
        for (var i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = color[i];
    
        // CLICK EVENT LISTENER
        square[i].addEventListener('click', function() {
    
            // GET CLICKED SQUARE COLOR
            var clickedSquare = this.style.backgroundColor;
            
            // CHECK IF CORRECT
            if(clickedSquare === correctAnswer) {
                alert("correct");
                    for(var i = square.length-1; i >= 0; i--) {
                        console.log(square.length)
                        square[i].remove();
                    }
                numberOfSquares += 3;
                playGame();
            } else {
                this.style.display = 'none';
            }
        });
        }

        // SET RGB TEXT TO GUESS THE COLOR
        document.getElementById("RGBColor").textContent = correctAnswer;
    }
}

// CREATE SQUARE
function createSquares(numberOfSquares) {
    for(var i = 0; i < numberOfSquares; i++) {

        var newNode = document.createElement('div');
        newNode.className='square';
        document.getElementById("right").appendChild(newNode);
    }
}
    
// PICK ONE OF COLOR ARRAY AS CORRECT
function pickColor() {
    return(color[Math.floor(Math.random() * color.length)]);
}

// GET RANDOM COLORS
function getColors(number) {
    var colorsArray = [];
        for (var c = 0; c < number; c++){
            colorsArray.push(randomRGBColor());
        }
    return colorsArray;
}

// GENERATE RANDOM RGB COLOR
function randomRGBColor() {
    // RANDOM RED
    var r = Math.floor(Math.random() * 256);
    // RANDOM GREEN
    var g = Math.floor(Math.random() * 256);
    // RANDOM BLUE
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}