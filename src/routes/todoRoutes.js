import express from 'express';
import { verifyToken } from '../lib/auth';
import { todoController } from '../controllers';

const routes = express.Router();

routes.all('/todos', verifyToken);
routes.get('/todos', async (req, res, next) => {
    try {
        const records = await todoController.getAll();
        res.status(200).json({ success: true, records });
    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
});

routes.post('/todos', async (req, res, next) => {
    try {
        const record = await todoController.create(req.body, req.decoded.data._id);
        res.status(201).json({ success: true, record });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
});

export default routes;