const playToggle = document.querySelector(".video-play")
const video = document.querySelector(".video-main");
const skipBack = document.querySelector(".skip-back");
const skipForward = document.querySelector(".skip-forward");
//const volume = document.querySelector("input[name='volume']");
//const playBack = document.querySelector("input[name='speed']");

const sliders = document.querySelectorAll(".slider");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");

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
function progressFill(e) {
    progress.style.width= `${(this.currentTime/video.duration)*100}%`;
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    playToggle.textContent = icon;
}

function handleSliderUpdate() {
    video[this.name] = this.value;
}

//scrub
function scrub(e) {
    const scrubTime = (e.offsetX/progressBar.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

playToggle.addEventListener("click", playPause)
skipBack.addEventListener("click", seekBack)
skipForward.addEventListener("click", seekForward)

//volume and playback
//volume.addEventListener("change", volChange)
//playBack.addEventListener("change", speedChange)
//volume.addEventListener("mousemove", volChange)
//playBack.addEventListener("mousemove", volChange)
sliders.forEach(slider=> slider.addEventListener("change", handleSliderUpdate))
sliders.forEach(slider=> slider.addEventListener("mousemove", handleSliderUpdate))


//video event listeners
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
video.addEventListener("click", playPause)
video.addEventListener("timeupdate", progressFill)

let mousedown = false;

progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e)=> mousedown && scrub(e)); //checks if mousedown variable is true then it moves onto the next which is scrub(e)
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);
