import 'reflect-metadata';

import http from 'http';
import mongoose from 'mongoose';
import { Application } from './application';
import { container } from './container';

mongoose.connect('mongodb://localhost:27017/test');

const application = container.get(Application);
application.registerGlobalMiddlewares();
application.registerRoutes();

const server = http.createServer(application.express);

server.on('error', (err) => {
  console.log(err);
});

server.listen(3000, () => {
  console.log('Server started : http://localhost:3000');
});
