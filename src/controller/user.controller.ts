import express, { Request, Response, NextFunction } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../service/user.service';
import buildresponse from '../helper/buildresponse';

const route = express.Router();

route.post('/', async (request: Request, response: Response): Promise<void> => {
    try {
        const { name, surname, email, pwd } = request.body;
        const data = await createUser(name, surname, email, pwd);
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

route.get('/', async (request: Request, response: Response): Promise<void> => {
    try {
        const data = await getAllUsers();
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

route.get('/:id', async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;
        const data = await getUserById(id);
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

route.put('/:id', async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        const data = await updateUser(id, name, surname, email, pwd);
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

route.delete('/:id', async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;
        const data = await deleteUser(id);
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

export default route;