'use strict';

class Eye{
    constructor() {
        let eye = document.querySelector(".objects-container .eye");
        this.element = document.body.appendChild(eye.cloneNode(true));
        this.element.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
        setTimeout(() => {
            this.destroy();
        }, 20000);
    }

    destroy() {
        document.body.removeChild(this.element);
    }
}

// function initEyeRotation() {
//     console.log((Math.random() * 360))
//     eye.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
// }

// initEyeRotation();

function createEye(){
    new Eye();
    let nextEye = (Math.random * 1500) + 1000;

    setTimeout(() => {
        createEye();
    }, nextEye);
}

createEye();
