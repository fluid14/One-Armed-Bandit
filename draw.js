class Draw {
    constructor() {
        this.displayColor = document.querySelectorAll('.draw-colors div');
        this.colors = ['red', 'blue', 'green', 'yellow'];
        this.drawnColors = [1, 2, 3];
    }

    drawElements() {
        for (let index in this.drawnColors) {
            this.drawnColors[index] = Math.floor(Math.random() * this.drawnColors.length);
        }
    }

    displayColors() {
        this.displayColor.forEach((color, index) => {
            color.style.backgroundColor = this.colors[this.drawnColors[index]];
        })
    }
}