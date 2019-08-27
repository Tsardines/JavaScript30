// get elements
const player = document.querySelector(".player"),
    video = player.querySelector(".viewer"),
    progress = player.querySelector(".progress"),
    progressBar = player.querySelector(".progress__filled"),
    toggle = player.querySelector(".toggle"),
    skipButtons = player.querySelectorAll("[data-skip]"),
    ranges = player.querySelectorAll(".player__slider");


// build out functions
function togglePlay() {
    const method = video.paused ? "play" : "pause"; // paused is a property that lives on the video
    video[method]();
}

function updateButton() {
    const icon = this.paused ? "►" : "❚❚";
    toggle.textContent = icon;
    console.log('update')
}

function skip() {
    console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip); // converts it to a num
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    // console.log(this.value);
    // console.log(this.name);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100 // currTime and duration are properties 
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// hook up evt listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false; // is the person currently clicking?

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
// if true, it'll run the scrub // if false, it won't

progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);