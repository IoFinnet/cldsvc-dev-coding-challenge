import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';

import router from './routes';
import { errorHandler } from './middleware';

export const app = express();

app.use(helmet()); // https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', router);

// catch 404 and forward to error handler
app.use((req: any, res: any, next: any) => {
  next(createError.NotFound());
});

// pass any errors to the error handler
app.use(errorHandler);
