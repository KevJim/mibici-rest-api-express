import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { apiV1Router } from 'src/api/v1/apiV1Router';
import { errorHandler } from 'src/middlewares/errorHandler';
import { notFound } from 'src/middlewares/notFound';
import { MessageResponse } from 'src/types/MessageResponse';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<any, MessageResponse>('/', (req, res) => {
    res.json({
        message: 'Hello world',
    });
});

apiV1Router(app);

app.use(notFound);
app.use(errorHandler);

// eslint-disable-next-line import/no-default-export
export default app;
