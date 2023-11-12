import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import { dbconnect } from './config/database.config.js';
// import path, { dirname } from 'path';
dbconnect();
const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3001'],
  })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
// app.use(express.static(path.join(__dirname,'.')));
// app.get("*",(req,res)=>{
//   res.sendFile(path.join(__dirname,"../../frontend/build/index.html"))
// });
const PORT = 500;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});