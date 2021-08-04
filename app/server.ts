import express, { Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import displayRoutes from 'express-routemap';

import { config } from '../config/index';
import { ApiRouter } from './routes/api-routes';
import { errorHandlerMiddleware } from './middlewares/common/error-handler-middleware'

const BASE_URL = `/api/${config.api.version}`;
const PORT = config.api.port;

export default class Server {
  public app = express.application;

  constructor() {
    this.app = express();
    this.run();
  };

  initMiddlewares(): void {
    this.app.set('trust proxy', true);
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(compression());
  };

  initRroutes(): void {
    this.app.get('/health/', (req: Request, res: Response) => {
      res.status(200).send({ code: 'OK', message: 'service up and running' });
    });
    this.app.use(BASE_URL, ApiRouter);
    this.app.use(errorHandlerMiddleware);
  };

  run(): void {
    try {
      this.initMiddlewares();
      this.initRroutes();
      this.app.listen(PORT, () => {
        console.log(`\x1b[32m Starting the microservice [ ${config.api.name} ]. at ${Date().toString()}`);
        console.log(`\x1b[32m Listening on port ${PORT}`);
        console.log(`\x1b[32m Running environment NODE_ENV=${config.env}`);
        console.log(`\x1b[32m Configuration middlewares: ${JSON.stringify(config.middewares)}`);

        displayRoutes(this.app);
      });
    } catch (e: any) {
      console.error(`\x1b[31m xxx Error trying to run server: ${e.message}`);
      process.exit(1);
    }
  };
};
