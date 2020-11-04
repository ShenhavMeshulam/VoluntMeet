if (process.env.NODE_ENV !== 'production') {
  require('dotenv/config');
}

import express from 'express';
import cors from 'cors';

import {ApiRouter} from './routes';
import {configureMongoose} from './config';

export const startApp = () => {
  const app = express();
  const port = process.env.PORT ?? 3000;

  app.use(cors());

  app.use('/api', ApiRouter());

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

configureMongoose()
  .then(startApp);