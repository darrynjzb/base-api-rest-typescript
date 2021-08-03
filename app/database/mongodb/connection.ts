import mongoose from 'mongoose';

import { config } from '../../../config/index';

export class MongoConnection {
  public instance!: mongoose.Mongoose;

  constructor() {
    this.connect();
  }

  async connect(): Promise<mongoose.Mongoose> {
    if (this.instance) {
      console.log(`\x1b[32m === Mongodb connected ===`);
      return this.instance;
    }
    const host = config.database.mongodb.host;
    const database = config.database.mongodb.databaseName;
    try {
      mongoose.set('useCreateIndex', true);
      this.instance = await mongoose.connect(`${host}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log(`\x1b[32m === Mongodb connected ===`);
      return this.instance;
    } catch (e: any) {
      console.error(`\x1b[31m xxx Error trying to connect to mongodb: ${e.message}`);
      process.exit(1);
    }
  };

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
    console.log(`\x1b[31m === Mongodb disconnected ===`);
  };
};
