import express from 'express';
import { pinoHttp } from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import ogrenciRouter from './routers/ogrenciler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const PORT = process.env.PORT;

export const createServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.json()); //gelen butun istekleri json alabil..

  app.use(
    pinoHttp({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.send('Anasayfa');
  });

  app.use('/ogrenciler', ogrenciRouter);

  app.use(notFoundHandler); //En son da kullanılır

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log('server baslatildi...');
  });
};
