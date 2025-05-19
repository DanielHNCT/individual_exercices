import pool from '../database/db.js';

export const OrderModel = {
    
    findById: async (id) => {
        try {
            const order = await pool.query(`SELECT * FROM orders
                                      WHERE id = $1`, [id]);
            return order;
        } catch (error) {
            console.error(error);
        }
    },

    findAll: async () => {
        try {
            const orders = await pool.query(`SELECT * FROM orders`);
            return orders;
        } catch (error) {
            console.error(error);
        }
    },

    create: async (data) => {
        try {
            await pool.query(`INSERT INTO orders (customer_id, plate_id, status_order)
                              VALUES ($1, $2)` [data.customerId, data.plateId]);
        } catch (error) {
            console.error(error);
        }
    },

    update: async (data) => {
        try {
            await pool.query(`UPDATE orders
                              SET status_order = $1
                              WHERE id = $2`, [data.status, data.id]);
        } catch (error) {
            console.error(error);          
        }
    },

    delete: async (id) => {
        try {
            await pool.query(`DELETE FROM TABLE order
                              WHERE id = $1`, [id])
        } catch (error) {
            console.error();
        }
    }
};