import { camelCase, replace } from 'lodash';
import { Application } from 'express';

const replaceMdwName = (name: string, folder: string): string => {
  return replace(name, folder, '');
};

export = (middlewareNames: string[]): Application[] => {
  const arrayOfMiddleware: Application[] = [];
  try {
    middlewareNames.forEach((name) => {
      let middleware;
      let path;
      if (name.includes('(common)')) {
        name = replaceMdwName(name, '(common)');
        path = `./../middlewares/common/${name}`;
      } else {
        path = `./../middlewares/${name}`;
      }
      middleware = require(path)[camelCase(name)];
      arrayOfMiddleware.push(middleware);
    });
  } catch (e) {
    throw e;
  }
  return arrayOfMiddleware;
};
