import { CustomerModel } from "../model/customerModel.js";

export const CustomerController = {

    getAllCustomers: async () => {
        try {
            const customers = await CustomerModel.findAll();
            return customers;
        } catch (error) {
            console.error(error);
        }
    },

    getCustomerById: async (id) => {
        try {
            const customer = await CustomerModel.findById(id);
            return customer;
        } catch (error) {
            console.error(error);
        }
    },

    createCustomer: async (data) => {
        try {
            await CustomerModel.create(data);
        } catch (error) {
            console.error(error);
        }
    },

    updateCustomer: async (data) => {
        try {
            await CustomerModel.update(data);
        } catch (error) {
            console.error(error);
        }
    },
    
    deleteCustomer: async (id) => {
        try {
            await CustomerController.deleteCustomer(id);
        } catch (error) {
            console.error(error);
        }
    }
};
