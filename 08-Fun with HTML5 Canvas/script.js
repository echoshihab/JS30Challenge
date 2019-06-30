const canvas = document.getElementById("draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const context = canvas.getContext('2d');
let hue = 0;
let direction = true;
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 5;



updateBrush = () => {
    //updating width, lnewidth and direction
    hue++
    if (context.lineWidth >=100 || context.lineWidth <=1)  {
        direction = !direction;
    }
    direction ? context.lineWidth++ : context.lineWidth--;

}



drawing = (event) => {
    [startX, startY] = [event.offsetX, event.offsetY] //take start position from mouse down event
    let drawTrigger = true;
    canvas.addEventListener('mouseup', () => drawTrigger = false);
    canvas.addEventListener('mouseout', () => drawTrigger = false);
    canvas.addEventListener('mousemove', (e)=>{
     if (drawTrigger === true) {
        context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        context.beginPath();
        context.moveTo(startX,startY);  //mouseown event offsetX and offset Y values
        context.lineTo(e.offsetX, e.offsetY); // mouse move event offsetX and offsetY values
        context.stroke();
        [startX, startY] = [e.offsetX, e.offsetY]; // updating start position to mouse move event
        updateBrush();

     }

})


}


canvas.addEventListener('mousedown', drawing)

