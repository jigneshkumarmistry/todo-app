import express from 'express';
import { verifyToken } from '../lib/auth';
import { todoController } from '../controllers';
import { todoValidation } from '../validations';

const routes = express.Router();

routes.all('/todos', verifyToken);

// For all records
routes.get('/todos', async (req, res, next) => {
    
    try {
        const records = await todoController.get(undefined, req.decoded.data);
        res.status(200).json({ success: true, records });
    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
});

// For single record
routes.get('/todos/:id', async (req, res, next) => {
    try {
        const record = await todoController.get(req.params.id);
        res.status(200).json({ success: true, record });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
});

// For new todos
routes.post('/todos', async (req, res, next) => {

    const {error} = todoValidation.storeValidation(req.body)
    if (error) return res.status(200).json({ error: true, message: error.details[0].message });

    try {
        const record = await todoController.create(req.body, req.decoded.data._id);
        res.status(201).json({ success: true, record });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
});

// For Update todos
routes.put('/todos/:id', async (req, res, next) => {

    const {error} = todoValidation.storeValidation(req.body)
    if (error) return res.status(200).json({ error: true, message: error.details[0].message });

    try {
        const id = req.params.id;
        const record = await todoController.update(id, req.body);
        res.status(200).json({ success: true, record });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
});

// For Delete Todos
routes.delete('/todos/:id', async (req, res, next) => {

    try {
        const record = await todoController.remove(req.params.id);
        res.status(200).json({ success: true, method: req.method, path: req.path });  
    } catch(error) {
        console.log(error.message);
        next(error);
    }
});

export default routes;