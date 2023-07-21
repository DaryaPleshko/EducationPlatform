import express from 'express';
import { createUser, authorizationUser } from '../service/api.service';
import buildresponse from '../helper/buildresponse';

const route = express.Router();

route.post('/reg', async (req, res): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd)
        buildresponse(res, 200, data);
    } catch (error: any) {
        buildresponse(res, 404, error.message);
    };

});

route.post('/auth', async (req, res): Promise<void> => {
    try {
        const { email, pwd } = req.body;
        const data = await authorizationUser(email, pwd);
        buildresponse(res, 200, data);
    } catch (error: any) {
        buildresponse(res, 404, error.message);
    }

});

export default route;