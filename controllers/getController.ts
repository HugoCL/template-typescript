import { Request, Response } from 'express';
import getService from '../services/getService';

const getController = {
    getTest(req: Request, res: Response) {
        getService
            .testService(req)
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                console.log(err);
                res.status(err.code).json(err);
            });
    },
};

export default getController;
