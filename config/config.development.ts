export = {
  middewares: require('./default/middlewares'),
  api: {
    port: Number(process.env.TS_CONFIG_SERVER_PORT),
    name: process.env.TS_CONFIG_API_NAME,
    version: process.env.TS_CONFIG_API_VERSION,
    blacklistMask: process.env.TS_CONFIG_API_BLACKLIST_MASK,
  },
  database: {
    drivers: process.env.DATABASE_DRIVERS,
    mongodb: {
      host: process.env.MONGODB_HOST,
      databaseName: process.env.MONGODB_DATABASE_NAME,
    }
  }
};
