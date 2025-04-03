import { MenuModel } from "../model/Model.js";
import { fetchMenus } from "../api/menus.js";

export const MenuController = {

    getMenuById: async (id) => {
        try {
            return await MenuModel.findById(id);
        } catch (error) {
            console.error(error);
        }
    },

    getAllMenus: async () => {
        try {
            return await MenuModel.findAll();
        } catch (error) {
            console.error(error);
            
        }
    }

}