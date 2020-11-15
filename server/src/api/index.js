import express from 'express';
import { v1Router } from './resources/v1';

export const restRouter = express.Router();
restRouter.use('/v1', v1Router);