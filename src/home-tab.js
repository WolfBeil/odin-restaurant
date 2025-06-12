class Display {
    constructor() {
        this.mainContainer = document.querySelector('#content');
    }

    update() {
        this.mainContainer.textContent = '';

        const infoDiv = document.createElement('div');
        this.mainContainer.appendChild(infoDiv);

        const infoParagraph = document.createElement('p');
        infoParagraph.textContent = `Looking for the best pizzas in town? Well, look no more. You won't find better pizzas
        than D'Amico's Pizzas. We have the freshest ingredients, the tastiest sauces and the most delicious cheeses.
        We'll be waiting for you, ready to present to you the greatest selection of pizzas you'll ever see.
        An authentic Italian Cuisine experience on British soil. Our hours are as follows:`;
        infoDiv.appendChild(infoParagraph);

        const workingHours = document.createElement('div');
        this.mainContainer.appendChild(workingHours);

        const weekDays = document.createElement('h3');
        weekDays.textContent = `Monday to Friday`;

        const weekHours = document.createElement('p');
        weekHours.textContent = `5pm - 11pm`;

        const saturday = document.createElement('h3');
        saturday.textContent = `Saturday`;

        const saturdayHours = document.createElement('p');
        saturdayHours.textContent = `6pm - 12pm`;

        workingHours.append(weekDays, weekHours, saturday, saturdayHours);

        const location = document.createElement('div');
        this.mainContainer.appendChild(location);

        const placeHeading = document.createElement('h3');
        placeHeading.textContent = `Where to find us?`;

        const place = document.createElement('p');
        place.textContent = `364 Lutwidge Street, Grimm Estate, London`;

        location.append(placeHeading, place);
    }
}

export const homeDisplay = new Display();