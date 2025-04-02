import { CustomerController } from "../controller/customerController.js";
import pool from "../database/db.js";
import express from 'express';
const router = express.Router();

router.get('/customers', async (req, res) => {
    try {
        if (req.query.id) {
            res.json(await CustomerController.getCustomerById(req.query.id));
        } else {
            res.json(await CustomerController.getAllCustomers());
        }
        
    } catch (error) {
        console.error(error);
    }
});

router.post('/customers/create', async (req, res) => {
    try {
        if (!CustomerController.createCustomer(req.body)) {
            res.json({status: "erreur"});
            return;
        }
        res.json({status: "added"});
    } catch (error) {
        console.error(error);
    }
});

router.put('/customers/update', async (req, res) => {
    try {
        if (!CustomerController.updateCustomer(req.body)) {
            res.json({status: "erreur"});
            return;
        }
        res.json({status: "updated"});
    } catch (error) {
        console.error();
    }
});

router.delete("/customers/delete", async (req, res) => {
    try {
        if(!CustomerController.deleteCustomer(req.query.id)) {
            res.json({status: "error"});
            return;
        }
        res.json({status: "deleted"});
    } catch (error) {
        console.error(error);
    }
});

export { router as customer };