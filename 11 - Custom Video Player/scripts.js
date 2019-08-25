// get elements
const player = document.querySelector(".player"),
    video = player.querySelector(".viewer"),
    progress = player.querySelector(".progress"),
    toggle = player.querySelector(".toggle"),
    skipButtons = player.querySelectorAll("[data-skip]"),
    ranges = player.querySelector(".player__slider");


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

// hook up evt listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);