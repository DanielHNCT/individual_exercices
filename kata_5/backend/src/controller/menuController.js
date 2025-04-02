import { MenuModel } from "../model/menuModel.js";

export const MenuController = {

    getMenus: async () => {
        try {
            const menus = await MenuModel.findAll();
            return menus
        } catch (error) {
            console.error(error);
        }
    },

    getMenuById: async (id) => {
        try {
            const menu = MenuModel.findById(id);
            return menu;
        } catch (error) {
            console.error(error);
        }
    },

    createMenu: async () => {
        try {
            const createdMenu = MenuModel.create();
            return createdMenu.rows;
        } catch (error) {
            console.error(error);
        }
    }
}