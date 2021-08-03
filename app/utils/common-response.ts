import { Response } from 'express';

export const setResponseWithError = (res: Response, status: number, message: string, code: string = 'ERROR') => {
  return res.status(status).send({ code, message });
}

export const setResponseWithOk = (res: Response, status: number, message: string, code: string = 'OK') => {
  return res.status(status).send({ code, message });
}

export const setResponseRaw = (res: Response, status: number, message: object) => {
  return res.status(status).send(message);
}