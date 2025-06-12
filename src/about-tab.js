class Display {
    constructor() {
        this.mainContainer = document.querySelector('#content');
    }

    update() {
        this.mainContainer.textContent = '';

        const aboutHeading = document.createElement('h2');
        aboutHeading.textContent = 'About Us';

        const firstParagraph = document.createElement('p');
        firstParagraph.textContent = `We're the best pizza restaurant in Grimm State.
        Here you'll find the most authentic pizzas with the coziest atmosphere.`;

        const secondParagraph = document.createElement('p');
        secondParagraph.textContent = `We're open from Monday to Saturday. You can find our working ours in the home tab.`;

        this.mainContainer.append(aboutHeading, firstParagraph, secondParagraph);
    }
}

export const aboutDisplay = new Display();