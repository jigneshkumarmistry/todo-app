import 'dotenv/config';
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

//Use Routes 
app.use(userRoutes);
app.use(todoRoutes);


// app level error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(`Something went wrong! ${err.message}`);
})

  
//Bind application with port and hostname
app.listen(port, hostname, () => {
    console.log(`App is running at http://${hostname}:${port}/`);
});