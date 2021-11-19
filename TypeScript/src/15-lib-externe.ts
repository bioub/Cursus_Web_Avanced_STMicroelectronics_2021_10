import fs from 'fs-extra';
import terser, { minify, MinifyOptions } from 'terser';
import { getRandom } from 'mdn-random';

getRandom();

const options: MinifyOptions = {
  mangle: false,
}

minify('function add(nb1,nb2) {return nb1+nb2}', options)

fs.remove('')
