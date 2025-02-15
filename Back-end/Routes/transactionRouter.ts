import express from 'express';
import { depositMoney, transferMoney, getTransactionHistory,withdrawMoney } from '../controllers/transactionController';
import { transactionValidationRules } from '../validators/transactionValidator';

const transactionRouter = express.Router();
//add protect route at the end
transactionRouter.post('/deposit/:id', transactionValidationRules, depositMoney); 
transactionRouter.post('/withdraw/:id', transactionValidationRules, withdrawMoney);
transactionRouter.post('/transfer/:id', transactionValidationRules, transferMoney);
transactionRouter.get('/history/:id', transactionValidationRules, getTransactionHistory);

export default transactionRouter;