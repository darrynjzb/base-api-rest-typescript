import moment from 'moment';
import _ from 'lodash';

import { ILogger } from '../interfaces/logger-interface';
import { BadRequestError } from '../utils/common-errors';

const levelMap: any = {
  debug: 'debug',
  info: 'info',
  warn: 'warn',
  error: 'error'
};

const consoleLevel = (level: string, module: string, method: string, description: string) => {
  const now = moment().format();
  if (level === 'debug') {
    console.debug(
      `[${_.toUpper(level)}]`,
      `[${now}]`,
      `[${_.toUpper(module)}]`,
      `[${_.toUpper(method)}]`,
      `=> ${description}`
    );
  }
  if (level === 'info') {
    console.info(
      `[${_.toUpper(level)}]`,
      `[${now}]`,
      `[${_.toUpper(module)}]`,
      `[${_.toUpper(method)}]`,
      `=> ${description}`
    );
  }
  if (level === 'warn') {
    console.warn(
      `[${_.toUpper(level)}]`,
      `[${now}]`,
      `[${_.toUpper(module)}]`,
      `[${_.toUpper(method)}]`,
      `=> ${description}`
    );
  }
  if (level === 'error') {
    console.error(
      `[${_.toUpper(level)}]`,
      `[${now}]`,
      `[${_.toUpper(module)}]`,
      `[${_.toUpper(method)}]`,
      `=> ${description}`
    );
  }
};

// TODO: hacer que escriba en un txt con path parametrizable
export const logger = (dataLogger: ILogger): void => {
  const { moduleName, methodName, description } = dataLogger;
  const level = levelMap[dataLogger.level];
  if (!level) {
    throw new BadRequestError('LEVEL_LOG_INVALID', 'not specific level log');
  }
  consoleLevel(level, moduleName, methodName, description);
};
