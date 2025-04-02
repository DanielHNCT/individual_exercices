
export const CustomerModel = {
    
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