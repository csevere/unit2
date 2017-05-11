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

//target class square in index
var squares = document.getElementsByClassName('square');
for(let i = 0; i < squares.length; i++){
    // console.log(squares[i]);
    squares[i].addEventListener('click', function(event){
        // console.log("User clicked ona square!");
        markSquare(this);
    });
}


// console.log(squares);


//other options
// A1.addeventlister('click', function(){
//   markSquare(A1)
// }

//create a marksquae function


function markSquare(currentSquare){
    var squareResult = "";
    if((currentSquare.innerHTML == "X") ||(currentSquare.innerHTML == "O")){
        squareResult = "Sorry, this square is taken!";
        // console.log("This square is taken ");
    }else if(whosTurn == 1){
          currentSquare.innerHTML = "X";
          whosTurn = 2;
          squareResult="";
    }else{
        currentSquare.innerHTML = "O";
        whosTurn = 1;
        squareResult = "";
    }
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = squareResult;

}
