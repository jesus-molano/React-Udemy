import express from 'express';
import dotenv from 'dotenv'
import router from './routes/auth.js'
import cors from 'cors'
import { dbConnection } from './database/config.js';

const dotEnv = dotenv.config();

// Express server   
const app = express();

// DB
dbConnection();

//CORS
app.use(cors())

// Public directory
app.use(express.static('public'));

// Read and parse the body
app.use(express.json())

// Routes
app.use('/api/auth', router);

// Listen request
app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));
