import fs from 'fs-extra';
import terser, { minify, MinifyOptions } from 'terser';
import { getRandomInt } from 'mdn-random';

const options: MinifyOptions = {
  mangle: false,
}

minify('function add(nb1,nb2) {return nb1+nb2}', options)

fs.remove('')
