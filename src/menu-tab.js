class Display {
    constructor() {
        this.mainContainer = document.querySelector('#content');
    }

    update() {
        this.mainContainer.textContent = '';
    }
}

export const menuDisplay = new Display();