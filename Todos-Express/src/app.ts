import express from 'express';
import cors from 'cors';
import { todosRoutes } from './todos/routes';

const app = express();
app.use(cors());

app.use('/todos', todosRoutes);

export { app };
