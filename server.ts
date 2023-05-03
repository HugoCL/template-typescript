// Packages Imports
import * as dotenv from 'dotenv';

dotenv.config();
import express from 'express';

const app = express();
import cors from 'cors';
import cron from 'cron';
import helmet from 'helmet';
// Router Imports
import getRouter from './routes/getRouter';
// App Settings and Middlewares
app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(express.json());

// Configuring port
const port = process.env.PORT || 5000;
const version = 'v1';
// Routes definition
app.get('/', async (req, res) => {
    res.send('Hola Mundo!');
});
app.use(`/${version}/get`, getRouter);

// App Serving
const server = app.listen(port);

console.log(`Listening On http://*:${port}/`);

export default server;
