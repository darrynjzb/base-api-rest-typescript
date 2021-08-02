export = {
  middewares: require('./default/middlewares'),
  api: {
    port: Number(process.env.TS_CONFIG_SERVER_PORT),
    name: process.env.TS_CONFIG_API_NAME,
    version: process.env.TS_CONFIG_API_VERSION
  }
};
