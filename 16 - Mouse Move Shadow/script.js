const h1 = document.querySelector('h1')


function mouseTracker(e) {
    [x, y] = [e.offsetX, e.offsetY];
    x = x - h1.offsetTop;
    y = y - h1.offsetLeft;

    console.log(x, y)

    if (x > 100){
        x = 100
    } else if (x < -100) {
        x = -100
    }

    if (y > 100) {
        y = 100
    } else if ( y < -100) {
        y = -100
    }

    h1.style.textShadow = `${x}px ${y}px #FF0000`

}


document.addEventListener('mousemove', mouseTracker)
