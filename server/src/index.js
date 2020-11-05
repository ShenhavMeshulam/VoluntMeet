if (process.env.NODE_ENV !== 'production') {
  require('dotenv/config');
}

import express from 'express';
import cors from 'cors';

import {ApiRouter} from './routes';
import {configureMongoose} from './config';
import { ErrorHandlerMiddleware } from './middlewares';

export const startApp = () => {
  const app = express();
  const port = process.env.PORT ?? 3000;

  app.use(cors());
  app.use(express.json());
  app.use(express.static('public'));

  app.use('/api', ApiRouter());
  app.use(ErrorHandlerMiddleware);
  app.use((req, res) => res.render('index.html'));

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

configureMongoose()
  .then(startApp);