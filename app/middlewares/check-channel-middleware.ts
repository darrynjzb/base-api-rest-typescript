import { Request, Response, NextFunction } from 'express';
import { includes } from 'lodash';

import { BadRequestError } from '../utils/common-errors';
import { config } from '../../config/index';

const channels = config.headers.allowChannels.split(',');

export const checkChannelMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const channel = req.headers['x-channel'];
  if (!includes(channels, channel)) {
    throw new BadRequestError('INVALID_CHANNEL', 'the channel is invalid');
  }
  return next();
};
