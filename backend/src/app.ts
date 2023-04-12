import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { router } from './routes/index';
import dbConnect from './config/mongodb';

const app = express();
const PORT = process.env.PORT;

/*
 *MIDDLEWARES
 */
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/*
 * ROUTES
 */
app.use(router);

/*
 * DB_CONNECT
 */

dbConnect().then(() => console.log('ONLINE_DB'));

/*
 * SERVER
 */

app.listen(PORT, () => console.log('ONLINE_SERVER_ON_PORT:', PORT));
