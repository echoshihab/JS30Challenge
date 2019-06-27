const boxes = document.querySelectorAll('.box');


const updateBox = () => {
    //increases/decreases panel/box size
    event.target.classList.toggle('open');
}

const updateText = (e) => {
    if (e.propertyName.includes('flex')) {
        e.target.children[0].classList.toggle('active');
        e.target.children[1].classList.toggle('active');
    }
}


boxes.forEach(box => box.addEventListener("click", updateBox))
boxes.forEach(box => box.addEventListener("transitionend", updateText))
