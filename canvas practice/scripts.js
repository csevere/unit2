// console.log("Test");

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
console.log(context);

//context.moveTo(0,0);

//move the pen/hand/tool to 100,100
context.moveTo(100,100);
//draw a line to 200,200
context.lineTo(200,200);
//Without moving the pen, draw to 300,100
context.lineTo(300,100);
context.lineTo(100,200);
context.lineTo(300,150);
context.lineTo(100,100);
//set the color
context.strokeStyle = "#ff0000";
/*context.stroke();*/
//
// draw a circle:
context.beginPath();
context.fillStyle = "#FFFF00";
context.arc(200,200, 50, 0, 2 * Math.PI);

context.fill();
context.stroke();

var x = 100;
var y = 100;
var r = 50;
var xDirection = 1;
var yDirection = 1;
var red = 0;
var blue = 0;
var green = 0;

function drawBall(){
    context.fillStyle = "#"+red+blue+green;
    context.beginPath();
    context.arc(x,y,r, 0, 2*Math.PI);
//x and y, x and y final arguments; wipes out the screen
    context.clearRect(0,0,500,500);
    context.fill();
    if((x > 500-r) || (x < r)){
      //we have reached teh right side
        xDirection = -xDirection;

    }
    if((y > 500-r) || (y < r)){
        yDirection = -yDirection;

    }
    var randomX = Math.random() * 4;
    var randomY = Math.random() * 4;
    x += 3 * xDirection;
    y += 4 * yDirection;

    red += 8;
    blue += 1;
    green += 5;


}

// <canvas id = "canvas" width = "500px" height = "500px"></canvas>

var ball = setInterval(drawBall,20);




// When you draw to a canvas element,
// you are simply drawing a bitmap in immediate mode.
// The elements (shapes, lines, images) that are drawn have
//no representation besides the pixels they use and their colour.
// Therefore, to get a click event on a canvas element (shape),
//you need to capture click events on the canvas HTML element and
//use some math to determine which element was clicked, provided
//you are storing the elements' width/height and x/y offset.
// To add a click event to your canvas element, use...

canvas.addEventListener('click', function() { }, false);
// To determine what element was clicked...

var elem = document.getElementById('canvas'),
  elemLeft = elem.offsetLeft,
  elemTop = elem.offsetTop,
  context = elem.getContext('2d'),
  elements = [];

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
  var x = event.pageX - elemLeft,
      y = event.pageY - elemTop;

  // Collision detection between clicked offset and element.
  elements.forEach(function(element) {
      if (y > element.top && y < element.top + element.height
          && x > element.left && x < element.left + element.width) {
          alert('clicked an element');
      }
  });

}, false);

// Add element.
elements.push({
    colour: '#05EFFF',
    width: 150,
    height: 100,
    top: 20,
    left: 15
});

// Render elements.
elements.forEach(function(element) {
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, element.width, element.height);
});

// canvas.addEventListener("click", function(event){
// 	   console.log(event);
//      if (event.){
//
//      }



// var c=document.getElementById("canvas");
// var ctx=c.getContext("2d");
// ctx.rect(20,20,150,100);
// ctx.stroke();
//
// var top = 20;
// var left = 20;
// var bottom = 170;
// var right = 120;
//
// // //passing the entire function
// // var ball = setInterval(drawBall,20);
//
// canvas.addEventListener("click", function(event){
// 	console.log(event.x, event.y);
//   // var x = event.clientX;     // Get the horizontal coordinate
//   // var y = event.clientY;
//
//   //recording clicks within the boundaries of the square
//
//   if((event.x > left) && (event.x < right) && (event.y > top) && (event.y < bottom)) {
//       console.log('click');
//
//
//   }
// });
