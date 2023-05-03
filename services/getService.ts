import { Request } from 'express';

const getService = {
    async testService(req: Request) {
        return {
            code: 200,
            status: true,
            message: 'Servicio funcionando correctamente',
            data: {},
        };
    },
};

export default getService;
