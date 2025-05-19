import { fetchMenus } from "../api/menus.js";

export const MenuModel = {

    findById: async (id) => {
        try {
            return await fetchMenus(id);
        } catch (error) {
            console.error(error);
        }
    },

    findAll: async () => {
        try {
            return await fetchMenus();
        } catch (error) {
            console.error();
        }
    }
}