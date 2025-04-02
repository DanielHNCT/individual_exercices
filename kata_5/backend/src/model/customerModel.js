import pool from "../database/db.js";

export const CustomerModel = {
    
    findById: async (id) => {
        try {
            const customer = pool.query(`SELECT * FROM customers
                                         WHERE id = $1`, [id]);
            return customer;
        } catch (error) {
            console.error();
        }
    },

    findAll: async () => {
        try {
            const customers = pool.query(`SELECT * FROM customers`);
            return customers;
        } catch (error) {
            console.error(error);
        }
    },

    create: async (data) => {
        try {
            await pool.query(`INSERT INTO customers (name)
                              VALUES ($1)`, [data.name]);
        } catch (error) {
            console.error(error);
        }
    },

    update: async (data) => {
        try {
            await pool.query(`UPDATE customer
                              SET name = $1
                              WHERE id = $2`, [data.name, data.id]);
        } catch (error) {
            console.error(error);
        }
    },

    delete: async (id) => {
        try {
            await pool.query(`DELETE FROMcustomer
                              WHERE id = $1`, [id]);
        } catch (error) {
            console.error(error);
        }
    }
}