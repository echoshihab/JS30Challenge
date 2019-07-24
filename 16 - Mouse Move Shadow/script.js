const h1 = document.querySelector('h1')


function mouseTracker(e) {
    [x, y] = [e.offsetX, e.offsetY]
    console.log(x, y)
    h1.style.textShadow = `${x}px ${y}px #FF0000`

}


document.addEventListener('mousemove', mouseTracker)
