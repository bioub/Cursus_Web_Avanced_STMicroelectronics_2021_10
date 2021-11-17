import fs from 'fs';

async function readFile(path: string): Promise<Buffer> {
  const buffer = await fs.promises.readFile(path);
  return buffer;
}

