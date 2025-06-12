import { aboutDisplay } from "./about-tab";
import { homeDisplay } from "./home-tab";
import { menuDisplay, pizzasArray } from "./menu-tab";

class Controller {
    constructor() {
        const homeBtn = document.querySelector('.home-btn');
        homeBtn.addEventListener('click', () => {
            homeDisplay.update();
        })

        const menuBtn = document.querySelector('.menu-btn');
        menuBtn.addEventListener('click', () => {
            menuDisplay.update(pizzasArray);
        })

        const aboutBtn = document.querySelector('.about-btn');
        aboutBtn.addEventListener('click', () => {
            aboutDisplay.update();
        })
    }
}

homeDisplay.update()

export const buttonsController = new Controller;