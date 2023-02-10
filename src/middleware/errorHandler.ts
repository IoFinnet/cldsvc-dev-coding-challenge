/* eslint-disable @typescript-eslint/no-unused-vars */
import createError from 'http-errors';
export const errorHandler = (err: any, req: any, res: any, next: any) => {
  // if err message is safe to expose to client or we are in development mode
  if (err.expose === true || process.env.NODE_ENV === 'development') {
    res.status(err.status || 500).send(err);
  } else {
    res.status(500).send(createError.InternalServerError());
  }
};
