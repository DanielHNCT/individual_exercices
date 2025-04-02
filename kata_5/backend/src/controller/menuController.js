import e from "express";
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

    createMenu: async (data) => {
        try {
            await MenuModel.create(data);
        } catch (error) {
            console.error(error);
        }
    },

    updateMenu: async (data) => {
        try {
            await MenuModel.update(data);
        } catch (error) {
            console.error(error);
        }
    },

    deleteMenu: async (data) => {
        try {
            await MenuModel.delete(data);
        } catch (error) {
            console.error(error);
        }
    }
}