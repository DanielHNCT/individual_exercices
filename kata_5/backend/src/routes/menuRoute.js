import express from 'express';
const router = express.Router();
import { MenuModel } from '../model/menuModel.js';
import { getMenuById, getMenus } from '../controller/menuController.js';

router.get('/menu', async (req, res) => {
    const id = parseInt(req.query.id);
    if (id) {
        res.json(MenuModel.findById(id));
    } else {
        res.json(MenuModel.findAll());
    }
});

export { router as menu };