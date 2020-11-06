import logger from 'morgan';
import express from 'express';
import coookieParser from 'cookie-parser';
import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(coookieParser());
app.use('/v1', indexRouter);

export default app;
