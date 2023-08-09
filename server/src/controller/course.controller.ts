import express, { Request, Response } from 'express';
import { getAllCourse, getCourseById, createCourse, updateCourse, deleteCourseById } from '../service/course.service';
import buildresponse from '../helper/buildresponse';


const route = express.Router();

route.get('/', async (request: Request, response: Response): Promise<void> => {
    try {
        const data = await getAllCourse();
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

route.get('/:id', async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;
        const data = await getCourseById(id);
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

route.post('/', async (request: Request, response: Response): Promise<void> => {
    try {
        const { course } = request.body;
        const data = await createCourse(course);
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

route.put('/:id', async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;
        const { course } = request.body;
        const data = await updateCourse(id, course);
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

route.delete('/:id', async (request: Request, response: Response): Promise<void> => {
    try {
        const { id } = request.params;
        const data = await deleteCourseById(id);
        buildresponse(response, 200, data);
    } catch (error: any) {
        buildresponse(response, 404, error.message);
    };
});

export default route;         