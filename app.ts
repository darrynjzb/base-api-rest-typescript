import dotenv from 'dotenv';
dotenv.config();

import { config } from './config/index'
import { Server } from './app/server';
import { MongoConnection } from './app/database/mongodb/connection';

// innit express server
new Server();

// innit dependencies
(async () => {
  config.database.drivers.split(',').forEach(async (driver) => {
    if (driver === 'mongodb') {
      new MongoConnection();
    }
  });
})();
