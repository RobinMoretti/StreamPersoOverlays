import Eye from "./Eye";

// function initEyeRotation() {
//     console.log((Math.random() * 360))
//     eye.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
// }

// initEyeRotation();

function createEye(){
    let eye = new Eye();
    let nextEye = (Math.random * 1500) + 1000;

    setTimeout(() => {
        createEye();
    }, nextEye);
}

createEye();