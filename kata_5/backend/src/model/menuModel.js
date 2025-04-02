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

    create: async () => {
        try {
            const menuCreated = await pool.query(`INSERT INTO menus (plate, description, image)
                                                  VALUES ($1, $2, $3)` [plate, descritpion, image]);
            return menuCreated.rows;
        } catch (error) {
            console.error(error);
        }
        
    },
    
    update: async ({plate, description, image, id}) => {
        try {
            const menuUpdated = await pool.query(`UPDATE menus 
                                                  SET plate = $1, description = $2, image = $3
                                                  WHERE id = $4)` [plate, description, image, id]);
            return menuUpdated.rows;
        } catch (error) {
            console.error(error);
        }
    },
    
    delete: async (id) => {
        try {
            const menuDeleted = await pool.query(`DELETE FROM menus
                                                  WHERE id = $1`[id]);
            return menuDeleted.rows;
        } catch (error) {
            console.error(error);
        }
        
    }
}
 
