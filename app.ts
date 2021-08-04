import dotenv from 'dotenv';
dotenv.config();

import { config } from './config/index'
import Server from './app/server';
import MongoConnection from './app/database/mongodb/connection';

(async () => {
  // express server
  new Server();
  // dependencies
  config.database.drivers.split(',').forEach(async (driver) => {
    if (driver === 'mongodb') {
      await new MongoConnection();
    }
  });
})();
