import express, { Request, Response, NextFunction } from 'express';
import { createUser } from '../service/user.service';
const route = express.Router();

route.post('/', async (request, response) => {
    const { name, surname, email, pwd } = request.body;
    const data = await createUser(name, surname, email, pwd);
    response.send(data);
})

route.get('/', (request: Request, response: Response) => {
    response.send('hi');
});

export default route;