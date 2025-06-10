class Display {
    constructor() {
        this.mainContainer = document.querySelector('#content');
    }

    update() {
        this.mainContainer.textContent = '';
    }
}

export const aboutDisplay = new Display();