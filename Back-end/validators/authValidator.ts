import { check } from "express-validator";
import  validatorMiddleware from './validatorMiddleware';
export const signUpValidation = [
  check("name")
    .notEmpty().withMessage("Name is required")
    .trim()
    .isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),

  check("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format")
    .normalizeEmail(),

  check("password")
    .notEmpty().withMessage("Password is required")
    .isLength({  min: 6, max: 6  }).withMessage("Password must be 6 numbers"),  

  check("username")
    .notEmpty().withMessage("Username is required")
    .trim()
    .isAlphanumeric().withMessage("Username must be alphanumeric"),

  check("phoneNum")
    .notEmpty().withMessage("Phone number is required")
    .isMobilePhone("any").withMessage("Invalid phone number"),

  check("IBAN")
    .notEmpty().withMessage("IBAN is required")
    .isIBAN().withMessage("Invalid IBAN format"),  

  check("cardNum")
    .notEmpty().withMessage("Card number is required")
    .isCreditCard().withMessage("Invalid card number"), 

  check("cvv")
    .notEmpty().withMessage("CVV is required")
    .isLength({ min: 3, max: 4 }).withMessage("CVV must be 3 or 4 digits")
    .isNumeric().withMessage("CVV must be numeric"),

  check("nationalId")
    .notEmpty().withMessage("National ID is required")
    .isNumeric().withMessage("National ID must be numeric")
    .isLength({ min: 14, max: 14 }).withMessage("National ID must be exactly 14 digits"),

  check("address.street")
    .optional()
    .trim(),

  check("address.city")
    .optional()
    .trim(),

  check("address.country")
    .optional()
    .trim(),
    validatorMiddleware
];

export const  loginValidator =[
  
  check("cardNum")
    .notEmpty().withMessage("Card number is required when using card login")
    .isCreditCard().withMessage("Invalid card number format"),

  check("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 , max:6 }).withMessage("Password must be 6 "),
    validatorMiddleware
];
