import http from 'http';
import { app } from './app';

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err);
});

server.listen(3000, () => {
  console.log('Server started : http://localhost:3000');
});
