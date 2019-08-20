import express from 'express';
import { userController } from '../controllers';

const routes = express.Router();

routes.post('/register', async (req, res, next) => {
    console.log('Here in register');
    res.status(200).json({ success: true });
});
