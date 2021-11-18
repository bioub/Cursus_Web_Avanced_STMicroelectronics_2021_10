import net from 'net';

const socket = net.connect(80, 'example.org');

socket.pipe(process.stdout);

socket.write('GET / HTTP/1.1\r\n');
socket.write('Host: example.org\r\n');
socket.write('\r\n');

/*
GET / HTTP/1.1
Host: example.org

*/
