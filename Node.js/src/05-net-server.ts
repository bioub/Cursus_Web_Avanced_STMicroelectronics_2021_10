import net from 'net';

const server = net.createServer();

server.on('listening', () => {
  console.log('server started');
});

server.on('error', (err) => {
  console.log('err', err);
});

server.on('connection', (socket) => {
  socket.pipe(process.stdout);

  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Hello\r\n');

  socket.end(); // Obligatoire
});

server.listen(8080);
