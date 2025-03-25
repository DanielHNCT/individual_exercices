import order from '../database/order-db.json' with { type: 'json' };

export const OrderModel = {
    
    findById: (id) => {
        for (let i = 0; i < menus.length; i++) {
            if (order[i].id === id) {
                return order[i]
            }
        }
    },

    findAll: () => {
        return order;
    },

    create: () => {},
    update: () => {},
    delete: () => {}
}