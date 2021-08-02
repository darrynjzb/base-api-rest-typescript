import express from 'express';
import cors from 'cors';
import compression from 'compression';
import displayRoutes from 'express-routemap';

import { config } from '../config/index';
import { ApiRouter } from './routes/api.routes';

const BASE_URL = `/api/${config.api.version}`;
const PORT = config.api.port;

export class Server {
  public app = express.application;

  constructor() {
    this.app = express();
    this.init();
  }

  init() {
    this.middlewares();
    this.routes();
    this.run();
  };

  middlewares() {
    this.app.set('trust proxy', true);
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(compression());
  };

  routes() {
    this.app.get('/health/', (req, res) => {
      res.status(200).send({ code: 'OK', message: 'service up and running' });
    });
    this.app.use(BASE_URL, ApiRouter);
  };

  run() {
    this.app.listen(PORT, () => {
      console.log(`\x1b[32m Starting the microservice [ ${config.api.name} ]. at ${Date().toString()}`);
      console.log(`\x1b[32m Listening on port ${PORT}`);
      console.log(`\x1b[32m Running environment NODE_ENV=${config.env}`);
      console.log(`\x1b[32m Configuration middlewares: ${JSON.stringify(config.middewares)}`);

      displayRoutes(this.app);
    });
  };
};
