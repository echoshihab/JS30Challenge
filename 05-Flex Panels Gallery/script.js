const boxes = document.querySelectorAll('.box');


const updateBox = () => {
    event.target.children[0].style.transform= 'translateY(0%)';
    event.target.children[1].style.transform = 'translateY(1200%)';
    event.target.style.flex = "5";
}


boxes.forEach(box => box.addEventListener("click", updateBox))
