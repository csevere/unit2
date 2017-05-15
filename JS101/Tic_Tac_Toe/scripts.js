//the plan
//check - set up board
//user should be able to click on the box and mark the square with users mark
//put an onclick directly on the square
//or add evenListener
//if it's x turn, put X in, it's O's turn, put O in
//keep track of who's turn it is
//now that we know who's turn it is, put their symbol in and change user's turn
//mark sqyare called and change whos turn
//we need to check whether someone won



//Inititalize whosTurn at player 1/ x
var whosTurn = 1;

var player1Squares = [];
var player2Squares = [];
var computerSquares = [];
// the number of moves of the AI player
var movesCount = [];
//select all the squares in class
var squares = document.querySelectorAll(".square");

var winningCombos = [
    ['A1', 'B1', 'C1'], //row 1
    ['A2', 'B2', 'C2'], //row2
    ['A3', 'B3', 'C3'], //row 3

    ['A1', 'A2', 'A3'], //col 1
    ['B1', 'B2', 'B3'], //col2
    ['C1', 'C2', 'C3'],//col3

    ['A1', 'B2', 'C3'], //diag1
    ['A3', 'B2', 'C1'], //diag2

];

var gameOverBool = false;
// var onePlayerGame = true;

//target class square in index
for(let i = 0; i < squares.length; i++){
    // console.log(squares[i]);
    squares[i].addEventListener('click', function(event){
        // console.log("User clicked ona square!");
        if(!gameOverBool){
            markSquare(this);
        }
    });
}


// console.log(squares);


//other options
// A1.addeventlister('click', function(){
//   markSquare(A1)
// }

//create a marksquae function


function markSquare(currentSquare){

    // console.log(currentSquare.id);
    var squareResult = "";
    if((currentSquare.innerHTML == '<img src="./Images/x_storm.jpg">') ||(currentSquare.innerHTML == '<img src="./Images/o_fire.jpg">')){
        squareResult = "Sorry, this square is taken!";
        // console.log("This square is taken ");
    }else if(gameOverBool){
        squareResult = "Someone has won the game";
    }else if(whosTurn == 1){
        currentSquare.innerHTML = '<img src="./Images/x_storm.jpg">';
        whosTurn = 2;
        squareResult="";
        player1Squares.push(currentSquare.id);
        checkWin(player1Squares,1);
    }else{
        currentSquare.innerHTML = '<img src="./Images/o_fire.jpg">';
        whosTurn = 1;
        squareResult = "";
        player2Squares.push(currentSquare.id)
        checkWin(player2Squares,2);
        // if(onePlayerGame){
        //     computerMove();
        // }
    }
    var messageElement = document.getElementById('message');
    // messageElement.innerHTML = squareResult;
    // console.log(player1Squares);
    // console.log(player2Squares);
}

// function restartGame(){
// var board = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]
// whosTurn = 2;

// var whosTurn = 1;
//
// function computerMove(currentSquare){};


function checkWin(currentPlayersSquares, whoJustWent){
  for(let i =0; i < winningCombos.length; i++){
    //Inner loop (sqaure inside a winning Combo)
    var squareCount = 0;
    for (let j = 0; j < winningCombos[i].length; j++){
        var winningSquare = winningCombos[i][j];
            //does the player have this square
        if(currentPlayersSquares.indexOf(winningSquare) > -1){
            // The index is > -1, which means the players has this square
            // We don't care when it happens, we just care that it happened.
            squareCount++;
        }
    }
    // if squareCount is 3, then the user had all 3 js in this //
    if(squareCount == 3){

        console.log("FIGHTER" + whoJustWent + " IS VICTORIOUS!");
        keepScore()


      gameOver(whoJustWent,winningCombos[i]);
      break; //stop checking i's, the game is over
    }
  }
}

function gameOver(whoJustWon, winningCombo){
    document.getElementById('message').innerHTML = "FIGHTER " + whoJustWon + " IS VICTORIOUS!";
    for(let i = 0; i < winningCombo.length;i++){
        document.getElementById(winningCombo[i].className += ' winning-square');




    }
    gameOverBool = true;
}


function keepScore(){
    var score = document.getElementsByClassName("score");
    score.value = 0;
    ++score.value;
    console.log(score); 
    // for (let i = 0; i < 50; i++) {
    //   score[i].innerHTML = ++score[i];
    //   console.log(score);
    // }
    // score.innerHTML = ++score;
    // console.log(score);
    // var squares = document.querySelectorAll(".square");
}

function clearBoard(){
      for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '<img src="./Images/placeholder.png">';
        console.log("test");
      }
      whosTurn = 1;
      player1Squares = [];
      player2Squares = [];
      gameOverBool = false;


}
