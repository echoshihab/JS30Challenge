const wrapper = document.querySelector('.wrapper');
const h1 = document.querySelector('h1');

const walk = 100;

function mouseTracker(e) {
    const [wrapperWidth, wrapperHeight] = [wrapper.offsetWidth, wrapper.offsetHeight]
    let [x, y] = [e.offsetX, e.offsetY];


    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x/ wrapperWidth * walk) - (walk / 2));
    const yWalk = Math.round((y/ wrapperHeight * walk) - (walk / 2));

    h1.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 #F08080,
    ${xWalk * -1}px ${yWalk}px 0 #33FFD4,
    ${yWalk}px ${xWalk* -1}px 0 #33C7FF,
    ${yWalk * -1}px ${xWalk}px 0 #9633FF
    `

}


wrapper.addEventListener('mousemove', mouseTracker)
