const display = (() => {
    class display {
        constructor() {
            this.mainContainer = document.querySelector('#content');
        }

        update() {
            const container = this.mainContainer;
            container.textContent = '';
            
        }
    }

    return new display();
})();

export const homeDisplay = display;