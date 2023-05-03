import express from 'express';
import getController from '../controllers/getController';

// Create the router
const getRouter = express.Router();

// Test
getRouter.get('/test', getController.getTest);
export default getRouter;
