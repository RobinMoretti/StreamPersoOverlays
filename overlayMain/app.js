import Eye from "./Eye";

// function initEyeRotation() {
//     console.log((Math.random() * 360))
//     eye.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
// }

// initEyeRotation();

function createEye(){
    let eye = new Eye();
    let nextEye = (Math.random() * 15000) + 2000;
    console.log(nextEye);
    setTimeout(() => {
        createEye();
    }, nextEye);
}

createEye();