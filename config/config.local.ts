export = {
  middewares: require('./default/middlewares'),
  api: {
    port: Number(process.env.TS_CONFIG_SERVER_PORT) || 3001,
    name: process.env.TS_CONFIG_API_NAME || 'api-rest-base',
    version: process.env.TS_CONFIG_API_VERSION || 'v1',
    blacklistMask: process.env.TS_CONFIG_API_BLACKLIST_MASK || 'document',
  },
  database: {
    drivers: process.env.DATABASE_DRIVERS || 'mongodb',
    mongodb: {
      host: process.env.MONGODB_HOST || 'mongodb://localhost:27017',
      databaseName: process.env.MONGODB_DATABASE_NAME || 'project'
    }
  }
};
