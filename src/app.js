import 'dotenv/config';
//console.log(process.env.APP_NAME);
import express from 'express';
import mongooes from 'mongoose';
import bodyParser from 'body-parser';

import { userRoutes, todoRoutes } from './routes';

const port = process.env.PORT;
const hostname = process.env.HOST_URL;
const app = express();

//DB Connection 
mongooes.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => {
    if(err) console.log('Failed to connect with mongo db server', err);
    else console.log('Successfully connected with mongo db server');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(todoRoutes);
app.listen(port, hostname, () => {
    console.log(`App is running at http://${hostname}:${port}/`);
});