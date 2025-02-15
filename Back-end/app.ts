import express  from 'express';
import dotenv from 'dotenv';
import database from './DB_config/database';
import AllRoutes from './Routes';
import cors from 'cors';
import cookieParser from "cookie-parser";

const app : express.Application = express();
app.use(express.json());
app.use(cookieParser());
app.use(
   cors({
     credentials: true,  
     origin: process.env.BASE_URL,  
   })
 );
database();
dotenv.config();

AllRoutes(app);

app.listen(process.env.PORT , ()=>{
   console.log(`App listen on Port : ${process.env.PORT}`) 
});  

