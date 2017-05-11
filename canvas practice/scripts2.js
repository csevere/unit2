var canvas;
var x, y;
var dx=4;
var dy=4;
var d = 20;
var width, height;

function init() {
    canvasE = document.getElementById('canvas');
    canvas= canvasE.getContext('2d');
    width = canvasE.width;
    height = canvasE.height;
    x = d+dx+1;
    y = d+dy+1;
    canvasE.addEventListener("click", onClick, false);
    console.log(event);

    clear();
    canvas.beginPath();
    canvas.fillStyle="#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    canvas.arc(x-1,y-1,d,0,Math.PI*2,true);
    canvas.closePath();
    canvas.fill();
    setInterval(loop, 15);

}

function loop() {
    clear();

    canvas.beginPath();
    canvas.fillStyle="#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    canvas.arc(x,y,d,0,Math.PI*2,true);
    canvas.closePath();
    canvas.fill();
    // Boundary Logic
    if( x<(d-dx)+1 || x>width-(d+dx)-1) dx=-dx;
    if( y<(d-dx)+1 || y>height-(d+dy)-1) dy=-dy;
    x+=dx;
    y+=dy;
}


function clear() {
    canvas.fillStyle="#ffffff";
    canvas.fillRect(0,0,width,height);
    canvas.fillStyle="#888888";
    canvas.strokeRect(0,0,width,height);
}

function onClick(e) {
    var element = canvasE;
    var offsetX = 0, offsetY = 0

        if (element.offsetParent) {
      do {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
      } while ((element = element.offsetParent));
    }

    x = e.pageX - offsetX;
    y = e.pageY - offsetY;
}

init();
