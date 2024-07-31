import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import User from './models/User.js';
import Transaction from './models/Transaction.js';

const app = express();
app.use(express.json());
app.use(cors());

import { PostSignup,PostLogin } from './controllers/user.js';

import { postTransaction, getTransactions, deleteTransaction } from "./controllers/transaction.js";


const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)

    if (conn) {
        console.log(`MongoDB connected successfully ✅`);
      }
    };
    connectDB();

    app.get('/', (req, res) => {
        res.json({
          message: `Welcome to Expense Tracker API`
        })
      })
      
      app.post("/signup", PostSignup )
app.post("/login",PostLogin)
      app.post("/transaction", postTransaction)
      app.get("/transactions", getTransactions)





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })