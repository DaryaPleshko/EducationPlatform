import express, { Request, Response, NextFunction } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../service/user.service';
const route = express.Router();

route.post('/', async (request: Request, response: Response): Promise<void> => {
    const { name, surname, email, pwd } = request.body;
    const data = await createUser(name, surname, email, pwd);
    response.send(data);
});

route.get('/', async (request: Request, response: Response): Promise<void> => {
    const data = await getAllUsers();
    response.send(data);
});

route.get('/:id', async (request: Request, response: Response): Promise<void> => {
    const { id } = request.params;
    const data = await getUserById(id);
    response.send(data);
});

route.put('/:id', async (request: Request, response: Response): Promise<void> => {
    const { id } = request.params;
    const { name, surname, email, pwd } = request.body;
    const data = await updateUser(id, name, surname, email, pwd);
    response.send(data);
});

route.delete('/:id', async (request: Request, response: Response): Promise<void> => {
    const { id } = request.params;
    const data = await deleteUser(id);
    response.send(data);
});

export default route;