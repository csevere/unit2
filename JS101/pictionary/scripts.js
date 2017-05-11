var canvas = document.getElementById('canvas');
// console.dir(canvas);
// console.log(document);
var context = canvas.getContext('2d');

//Set up the base options for the pictionary board

var color = "black";
var thickness = 10;
var colorPicker = document.getElementById('color-picker');
var thicknessPicker = document.getElementById('thickness');
var mouseDown = false;
//create empty objects for mouseDown and lastMousePosition
var mousePosition = {};
var lastMousePosition = null;
// console.dir(colorPicker);

//
colorPicker.addEventListener('change', function(event){
    console.dir(event.target);
    color = colorPicker.value; //import cause always getting values from forms
    // color = event.target.value; does the same thing as above
    // console.log(color);

});

thicknessPicker.addEventListener('change', function(event){
    console.log(event);
    thickness = thicknessPicker.value;
    // thickness = event.target.value; does the same thing
    // console.log(thickness);

});

canvas.addEventListener('mousedown', function(event){
    mouseDown = true;
    lastMousePosition = null;
});

canvas.addEventListener('mouseup', function(event){
    mouseDown = false;

});

canvas.addEventListener('mousemove', function(event){
    // console.log(event);

    if(mouseDown){
        // console.log("User has pressed the mouse down and is moving!!")
        //get the location of the mouse
        //set to null cuase we dont ahve one
        //the user has either just show up and we don't have a
        //or the user let go of the mouse and we
        if(lastMousePosition == null){
            lastMousePosition = {
                // x: event.pageX,
                // y: event.pageY

                x: event.offsetX,
                y: event.offsetY
            }

        }

        mousePosition.x = event.offsetX;
        mousePosition.y = event.offsetY;
        // console.log(event);
        // console.log(mousePosition.x)

        context.strokeStyle = color;

        context.lineWidth = thickness;
        context.beginPath();
        context.lineCap = "round";
        context.moveTo(lastMousePosition.x, lastMousePosition.y);
        context.lineTo(mousePosition.x, mousePosition.y);
        context.stroke();
        context.closePath();

        lastMousePosition = {
          x: mousePosition.x,
          y: mousePosition.y
        }

    }


});

function changeBG(){

  var bkImage1 = Math.ceil(Math.random() * 5);
  var bkImage2 = Math.ceil(Math.random() * 5);

  var image1 = "./Images/p" + bkImage1 + ".jpg";
  var image2 = "./Images/p" + bkImage2 + ".jpg";


  document.images.bkImage1.src = image1;
  document.images.bkImage2.src = image2;
}

function startEasy(){
    var wordList = [
        "cat",
        " skateboard",
        " mouse",
        " whale",
        " kite",
        " banana",
        " cow",
        " house",
        " tree",
        " cookie"
    ];
    document.getElementById('message1').innerHTML = [wordList];

}

function startFair(){
  var wordList = [
      "frog",
      " pinwheel",
      " lightsaber",
      " cowboy",
      " pirate",
      " nature",
      " garbage",
      " teapot",
      " America",
      " bicycle"
  ];
  document.getElementById('message1').innerHTML = [wordList];

}

function startHard(){
  var wordList = [
      "jungle",
      " retail",
      " glitter",
      " vegetarian",
      " commercial",
      " jazz",
      " braid",
      " mad scientist",
      " owl",
      " myth"
  ];
  document.getElementById('message1').innerHTML = [wordList];

}

function clearBox(){
    document.getElementById('message1').innerHTML = "start";
}
