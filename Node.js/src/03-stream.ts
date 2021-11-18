import fs from 'fs';
import zlib from 'zlib';

// ReadStream : lecture (méthode read)
// WriteStream : écriture (méthode write)
// DuplexStream : lecture/écriture (méthodes read et write)
// TransformStream : lecture/écriture (méthodes read et write) avec une transformation au milieu

process.stdout.write('Hello\n');

const rs = fs.createReadStream('.editorconfig');
const ts = zlib.createGzip()
const ws = fs.createWriteStream('.editorconfig.zip.copy');
rs.pipe(ts).pipe(ws);

// cat .editorconfig | gzip > .editorconfig.zip.copy
