import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json());
app.use(cors());

import { menu } from './src/routes/menuRoute.js';
import { customer } from './src/routes/customerRoute.js';
import { order } from './src/routes/orderRoute.js';

app.use(menu);
app.use(customer);
app.use(order);

app.listen(SERVER_PORT, async () => {
    console.log(`Server running on http://localhost:3000`);
});