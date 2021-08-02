import fs from 'fs';
import { IConfig } from './../app/interfaces/config.interface';

let config: IConfig;

const getConfiguration = () => {
  const env = process.env.TS_ENV || 'local';
  if (fs.existsSync(`${__dirname}/config.${env}`)) {
    throw new Error(`the config file ${__dirname}/config.${env}.js was not found, set correctly the env variable TS_ENV`);
  }
  const cnf = require(`./config.${env}`);
  cnf.env = env;
  return Object.freeze(cnf);
};

config = getConfiguration();

export { config };
