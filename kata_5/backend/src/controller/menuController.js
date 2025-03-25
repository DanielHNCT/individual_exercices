import { asyncHandler } from "../utils/asyncHandler.js";
import { MenuModel } from "../model/menuModel.js";

export const getMenuById = asyncHandler(async (req, res) => {
    const menu = MenuModel.findById(req.query.id);
    return menu;
});

export const getMenus = asyncHandler(async (req, res) => {
    const menus = MenuModel.findAll();
    res.json(menus);
});

