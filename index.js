
const title = document.querySelector(".title");
title.innerText = "❤ Hodu's Homepage";

const width = 320;
const height = 240;

function mirror() {

    let video = document.getElementById("videoinput"); // video is the id of video tag
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("An error occurred! " + err);
    });
}

// function in_video() {
//     let src = new cv.Mat(height, width, cv.CV_8UC4);
//     let dst = new cv.Mat(height, width, cv.CV_8UC1);
//     let cap = new.VideoCapture("images/20191207_152022.mp4");
    
//     console.log(cap);
// }

function init() {
    mirror();
    // in_video();
}

init();