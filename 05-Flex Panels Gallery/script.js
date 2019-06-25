const boxes = document.querySelectorAll('.box');


const updateBox = () => {
    event.target.children[0].style.transform= 'translateY(0px)';
    event.target.style.flex = "5";
}


boxes.forEach(box => box.addEventListener("mousedown", updateBox))
