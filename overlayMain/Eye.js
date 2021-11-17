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

export default Eye;

