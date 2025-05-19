import pool from "../database/db.js";

export const MenuModel = {
    
    findAll: async () => {
        try {
            const menus = await pool.query("SELECT * FROM menus");
            return menus.rows;
        } catch (error) {
            console.error(error);
        }
        
    },

    findById: async (id) => {
        try {
            const menu = await pool.query(`SELECT * FROM menus
                                           WHERE id = $1`, [id]);
            return menu.rows;
        } catch (error) {
            console.error(error);
        }
        
    },

    create: async (data) => {
        try {
            await pool.query(`INSERT INTO menus (plate, description, image)
                              VALUES ($1, $2, $3)`, [data.plate, data.description, data.image]);
        } catch (error) {
            console.error(error);
        }
    },
    
    update: async (data) => {
        try {
            await pool.query(`UPDATE menus 
                              SET plate = $1, description = $2, image = $3
                              WHERE id = $4`, [data.plate, data.description, data.image, data.id]);
        } catch (error) {
            console.error(error);
        }
    },

    delete: async (id) => {
        try {
            await pool.query(`DELETE FROM menus
                              WHERE id = $1`, [id]);
        } catch (error) {
            console.error(error);
        }   
    }
}
 
