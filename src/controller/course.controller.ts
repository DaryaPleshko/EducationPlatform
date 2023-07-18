import express, { Request, Response } from 'express';
import { getAllCourse, getCourseById, createCourse } from '../service/course.service';
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


export default route;