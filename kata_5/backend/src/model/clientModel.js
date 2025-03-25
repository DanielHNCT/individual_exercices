import client from '../database/client-db.json' with { type: 'json' };
// import addToJson from '../utils.js';

export const ClientModel = {
    
    findById: (id) => {
        for (let i = 0; i < client.length; i++) {
            if (client[i].id === id) {
                return client[i]
            }
        }
    },

    findAll: () => {
        return client;
    },

    create: () => {},
    update: () => {},
    delete: () => {}
}