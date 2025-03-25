import menus from '../database/menus-db.json' with { type: 'json' };

export const MenuModel = {
    
    findById: (id) => {
        for (let i = 0; i < menus.length; i++) {
            if (menus[i].id === id) {
                return menus[i]
            }
        }
    },

    findAll: () => {
        return menus;
    },

    create: () => {},
    update: () => {},
    delete: () => {}
}
 
