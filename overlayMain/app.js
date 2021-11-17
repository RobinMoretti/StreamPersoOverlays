setInterval(() => {
    initEyeRotation();
}, 20000);

let eye = document.getElementById("eye");

function initEyeRotation() {
    console.log((Math.random() * 360))
    eye.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
}

initEyeRotation();