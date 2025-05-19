import { MenuController } from "../controller/controller.js";
import { createCard } from "./component/card.js";

const app = document.getElementById('app');
export const MenuView = {
    displayMenus: async () => {
        try {
            const data = await MenuController.getAllMenus();
            data.forEach(element => {
                app.appendChild(createCard(element));
            });
        } catch (error) {
            console.error(error);
        }
    },

    // displayMenuById: async () => {
    //     try {
            
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
}

