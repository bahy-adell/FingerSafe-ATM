import {check } from "express-validator";
import validatorMiddleware from "./validatorMiddleware";
export const transactionValidationRules = [
  check('userId').isMongoId().withMessage('Invalid userId'),
  check('receiverId').isMongoId().withMessage('Invalid receiverId'),
  check('amount').isNumeric().withMessage('Amount must be numeric and greater than 0'),
  validatorMiddleware
];