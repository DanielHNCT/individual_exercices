import express from 'express';
const app = express();
app.use(express.json());

import { menu } from './src/routes/menuRoute.js';
import { customer } from './src/routes/customerRoute.js';
import { order } from './src/routes/orderRoute.js';

app.use(menu);
app.use(customer);
app.use(order);

app.listen(3000, async () => {
    console.log(`Server running on http://localhost:3000`);
});