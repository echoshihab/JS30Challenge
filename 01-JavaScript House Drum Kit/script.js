soundDict = { 65:'kick1' , 83:'kick2' , 68: 'clap', 70: 'hat', 71: 'perc', 72:'cymb', 74:'shaker', 75:'snare', 76:'toms' }

const playAudio=(e) =>{

    if (soundDict.hasOwnProperty(e.keyCode)){
        //if the key exists do the following
        const audio = new Audio(`mysounds/${soundDict[e.keyCode]}.wav`);  //get audio
        const key = document.querySelector(`.${soundDict[e.keyCode]}`)//select related key
        audio.currentTime = 0; // rewind to start
        key.classList.add('pressed');
        audio.play();
    }

}

//removing any transition effects
const removeTransition=(e)=> {
    e.target.classList.remove('pressed');

}


const keyDivs = document.querySelectorAll('.box');
keyDivs.forEach(keyDiv => keyDiv.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playAudio)
