const playToggle = document.querySelector(".video-play")
const video = document.querySelector(".video-main");
const skipBack = document.querySelector(".skip-back");
const skipForward = document.querySelector(".skip-forward");
const volume = document.querySelector("input[name='volume']");
const playBack = document.querySelector("input[name='speed']");
const progress = document.querySelector(".progress");

let playFlag = false;

//playing and pausing
function playPause(_) {
    playFlag = !playFlag
    playFlag ? video.play() : video.pause();  //pause or play based on the playFlag status
}


//seeking back 10s
function seekBack() {
    video.currentTime = video.currentTime - 10;
}

//moving forward 25sec
function seekForward() {
    video.currentTime = video.currentTime + 25;

}

//change volume
function volChange() {
    video.volume = this.value;
}


//change speed
function speedChange() {
    video.playbackRate = this.value;
}
//progress bar
function progressBar(e) {
    progress.style.width= `${(this.currentTime/video.duration)*100}%`;
}



volume.addEventListener("change", volChange)
playToggle.addEventListener("click", playPause)
skipBack.addEventListener("click", seekBack)
skipForward.addEventListener("click", seekForward)
playBack.addEventListener("change", speedChange)
video.addEventListener("timeupdate", progressBar)
