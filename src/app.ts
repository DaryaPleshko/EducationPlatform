import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import user from './controller/user.controller';
import course from './controller/course.controller';
const app = express();

app.use(bodyParser.json());

app.use('/user', user);

app.use('/course', course);

app.use((error, req: Request, res: Response, next: NextFunction) => res.send(error.message));

export default app;