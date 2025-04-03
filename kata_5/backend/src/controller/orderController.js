import { OrderModel } from "../model/orderModel.js";

export const OrderController = {
    
    getOrderById: async (id) => {
        try {
            const order = OrderModel.findById(id);
            return order;
        } catch (error) {
            console.error();
        }
    },

    getAllOrders: async () => {
        try {
            const orders = OrderModel.findAll();
            return orders;
        } catch (error) {
            console.error();
        }
    },

    createOrder: async (data) => {
        try {
            await OrderModel.create(data);
        } catch (error) {
            console.error();
        }
    },

    updateOrder: async (data) => {
        try {
            await OrderModel.update(data);
        } catch (error) {
            console.error(error);
        }
    },

    deleteOrder: async (id) => {
        try {
            await OrderModel.delete(id);
        } catch (error) {
            console.error(error);
        }
    }
};