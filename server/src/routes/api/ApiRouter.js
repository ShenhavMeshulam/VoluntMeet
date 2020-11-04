import { Router } from 'express';
import { EventRouter } from './events';

export const ApiRouter = () => {
  const router = Router();

  router.use('/events', EventRouter());

  return router;
};