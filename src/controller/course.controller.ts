import express, { Request, Response, NextFunction } from 'express';
// import { createCourse } from '../service/course.service';
const route = express.Router();

route.get('/', async (request: Request, response: Response): Promise<void> => {
    // const { } = request.body;
    // const data = await createCourse();
    response.send('hi');
});

export default route;