import express from 'express';
const router = express.Router();

import { MenuController } from '../controller/menuController.js';

router.get('/menu', async (req, res) => {
    if(req.query.id) {
        res.json(await MenuController.getMenuById(req.query.id));
    } else {
        res.json(await MenuController.getMenus());
    }
});

// router.post('/menu/:add', async (req, res) => {
//     if ()
// });

export { router as menu };