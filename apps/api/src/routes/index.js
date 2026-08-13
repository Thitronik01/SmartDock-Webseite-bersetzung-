import { Router } from 'express';
import healthCheck from './health-check.js';
import configuratorRouter from './configurator.js';
import translateRouter from './translate.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/configurator', configuratorRouter);
    router.use('/translate', translateRouter);

    return router;
};