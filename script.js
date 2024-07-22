
const videoContainer = document.querySelector(".video-container");
const playPauseButton = document.querySelector(".play-pause-btn");
const video = document.querySelector("video");

const theaterBtn = document.querySelector(".theater-btn");
const fullscreenBtn = document.querySelector(".fullscreen-btn");
const miniPlayerBtn = document.querySelector(".mini-player-btn");


document.addEventListener("keydown",e=>{
    switch (e.key) {
        case " ":
        case "k":
            console.log(e)
            togglePlay()
            break;
        case "f":
            toggleFullScreenMode()
            break
        case "t":
            toggleTheaterMode()
            break
        case "i":
            toggleMiniPlaerMode()
            break
    }
})


theaterBtn.addEventListener("click",toggleTheaterMode)
fullscreenBtn.addEventListener("click",toggleFullScreenMode)
miniPlayerBtn.addEventListener("click",toggleMiniPlaerMode)


function toggleTheaterMode(){
    videoContainer.classList.toggle("theater")
}

function toggleFullScreenMode(){
    if (document.fullscreenElement ==null) {
        videoContainer.requestFullscreen()
    }else{
        document.exitFullscreen()
    }
}

function toggleMiniPlaerMode(){
    if (videoContainer.classList.contains("mini-player")) {
        document.exitPictureInPicture()
    }else{
        video.requestPictureInPicture()
    }
}

video.addEventListener("enterpictureinpicture",()=>{
    videoContainer.classList.add("mini-player")
})

video.addEventListener("leavepictureinpicture",()=>{
    videoContainer.classList.remove("mini-player")
})




document.addEventListener("fullscreenchange", ()=>{
    videoContainer.classList.toggle("fullscreen", document.fullscreenElement)
})



playPauseButton.addEventListener("click",togglePlay)
video.addEventListener("click",togglePlay)

function togglePlay(){
    video.paused? video.play():video.pause();
}

video.addEventListener("play",()=>{
    videoContainer.classList.remove("paused")
})
video.addEventListener("pause",()=>{
    videoContainer.classList.add("paused")
})