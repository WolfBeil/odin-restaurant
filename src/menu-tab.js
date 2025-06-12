class Pizza {
    constructor(name, ingredients, price) {
        this.name = name,
        this.ingredients = ingredients,
        this.price = price
    }

    getDetails() {
        return `${this.name}: (${this.ingredients.join(', ')}) - ${this.price}`;
    }
}

export const pizzasArray = [
    new Pizza('Neapolitan', ['Mozzarella Cheese', 'Ham', 'Tomato Sauce', 'Basil Leaves'], '$12'),

    new Pizza('Marinara', ['Tomato Sauce', 'Garlic', 'Oregano', 'Olive Oil'], '$10'),

    new Pizza('Capricciosa', ['Mozzarella Cheese', 'Tomato Sauce', 'Prosciutto Cotto', 'Mushrooms', 'Black Olives'], '$16'),

    new Pizza('Quattro Formaggi', ['Mozzarella Cheese', 'Gorgonzola Cheese', 'Parmigiano-Reggiano Cheese', 'Fontina Cheese'], '$16'),
];

class Display {

    constructor() {
        this.mainContainer = document.querySelector('#content');
    }

    update(pizzasArray) {
        this.mainContainer.textContent = '';

        const menuHeading = document.createElement('h2');
        menuHeading.textContent = "Our Delicious Pizzas";
        menuHeading.classList = 'pizzas-heading';
        this.mainContainer.appendChild(menuHeading);

        for (const pizza of pizzasArray) {
            const pizzaDiv = document.createElement('div');
            pizzaDiv.classList = 'pizza-div';
            this.mainContainer.appendChild(pizzaDiv);

            const pizzaName = document.createElement('h3');
            pizzaName.textContent = `${pizza.name}`;
            
            const pizzaIngr = document.createElement('p');
            pizzaIngr.textContent = `Ingredients: ${pizza.ingredients.join(', ')}`;

            const pizzaPrice = document.createElement('p');
            pizzaPrice.textContent = `${pizza.price}`;

            pizzaDiv.append(pizzaName, pizzaIngr, pizzaPrice);
        }
    }
}

export const menuDisplay = new Display();