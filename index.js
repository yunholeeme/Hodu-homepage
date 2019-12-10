
const title = document.querySelector(".title");
title.innerText = "❤ Hodu's Homepage";

function mirror() {
    const width = 320;
    const height = 240;
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

function init() {
    mirror();
}

init();