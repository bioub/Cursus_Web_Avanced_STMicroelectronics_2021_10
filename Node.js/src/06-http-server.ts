import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write('Hello HTTP');
    res.end(); // Obligatoire
  } else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/plain');
    res.write('Not Found');
    res.end(); // Obligatoire
  }
});

// server.on('listening', () => {
//   console.log('server started');
// });

server.on('error', (err) => {
  console.log('err', err);
});

// server.on('connection', (socket) => {
//   socket.pipe(process.stdout);

//   socket.write('HTTP/1.1 200 OK\r\n');
//   socket.write('Content-type: text/plain\r\n');
//   socket.write('\r\n');
//   socket.write('Hello\r\n');

//   socket.end(); // Obligatoire
// });

// server.on('request', (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-type', 'text/plain');
//   res.write('Hello HTTP');
//   res.end(); // Obligatoire
// });

server.listen(8080, () => {
  console.log('server started');
});
