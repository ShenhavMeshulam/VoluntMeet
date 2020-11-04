import { Router } from 'express';
import { EventController } from './EventController';

export const EventRouter = () => {
  const router = Router();
  const controller = EventController();

  router.get('/', controller.getAll);

  return router;
}