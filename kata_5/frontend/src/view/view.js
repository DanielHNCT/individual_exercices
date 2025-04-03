import { MenuController } from "../controller/controller.js";
import { createCard } from "./component/card.js";
const cardContainer = document.getElementById('card-container');

export const MenuView = {
    renderMenus: async () => {
        try {
            const data = await MenuController.getAllMenus();
            return cardContainer.appendChild(createCard(data));
        } catch (error) {
            console.error(error);
        }
    },
}

