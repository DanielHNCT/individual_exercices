import { OrderController } from '../controller/orderController.js';
import express from 'express';
const router = express.Router();

router.get('/orders', async (req, res) => {
    try {
        if (req.query.id) {
            res.json(await OrderController.getOrderById(req.query.id));
            return;
        } else {
            res.json(await OrderController.getAllOrders());
        }
    } catch (error) {
        console.error(error);
    }
});

router.post('/orders/create', async (req, res) => {
    try {
        await OrderController.createOrder(req.body);
    } catch (error) {
        console.error();
    }
});

router.put('/orders/update', async (req, res) => {
    try {
        await OrderController.updateOrder(req.body);
    } catch (error) {
        console.error(error);
    }
});

router.delete('/orders/delete', async (req, res) => {
    try {
        await OrderController.deleteOrder(req.query.id);
    } catch (error) {
        console.error(error);
    }
});

export { router as order };