import express from 'express';
import { userController } from '../controllers';
import { generateToken } from '../lib/auth';

const routes = express.Router();

routes.post('/register', async (req, res, next) => {
    try {
        const record = await userController.create(req.body);
        res.status(200).json({ 
            success: true,
            record 
        });
    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
});

routes.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const record = await userController.getByEmail(email, password);
        res.status(200).json({ 
            success: true,
            token: generateToken(record)
        });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
});

export default routes;