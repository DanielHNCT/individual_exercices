import express from 'express';
const router = express.Router();

import { MenuController } from '../controller/menuController.js';

router.get('/menu', async (req, res) => {
    try {
        if(req.query.id) {
            res.json(await MenuController.getMenuById(req.query.id));
        } else {
            res.json(await MenuController.getMenus());
        }
    } catch (error) {
        console.error(error);
    }
});

router.post('/menu/create', async (req, res) => {
    try {
        if (!MenuController.createMenu(req.body)) {
            res.json({message: "fatal error"});
            return;
        }
        res.json({status: "added"});
    } catch (error) {
        console.error(error);
    }
});

router.put('/menu/update', async (req, res) => {
    try {
        if (!MenuController.updateMenu(req.body)) {
            res.json({message: "fatal error"});
            return;
        }
        res.json({status: "updated"});
    } catch (error) {
        console.error(error);
    }
});

router.delete('/menu/delete', async (req, res) => {
    try {
        if (!MenuController.deleteMenu(req.query.id)) {
            res.json({message: "fatal error"});
            return;
        }
        res.json({status: "deleted"});
    } catch (error) {
        console.error(error);
    }
});
export { router as menu };