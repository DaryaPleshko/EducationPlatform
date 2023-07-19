import express, { Request, Response } from 'express';
import { getAllCourse, getCourseById, createCourse, updateCourse, deleteCourseById } from '../service/course.service';
const route = express.Router();

route.get('/', async (request: Request, response: Response): Promise<void> => {
    const data = await getAllCourse();
    response.send(data);
});

route.get('/:id', async (request: Request, response: Response): Promise<void> => {
    const { id } = request.params;
    const data = await getCourseById(id);
    response.send(data);
});

route.post('/', async (request: Request, response: Response): Promise<void> => {
    const { course } = request.body;
    const data = await createCourse(course);
    response.send(data);
});

route.put('/:id', async (request: Request, response: Response): Promise<void> => {
    const { id } = request.params;
    const { course } = request.body;
    const data = await updateCourse(id, course);
    response.send(data);
});

route.delete('/:id', async (request: Request, response: Response): Promise<void> => {
    const { id } = request.params;
    const data = await deleteCourseById(id);
    response.send(data);   
});

export default route;      