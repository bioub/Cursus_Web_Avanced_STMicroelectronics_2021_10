import { Logger } from '../02-services/Logger';
import { container } from './container';

export function main() {
  const logger = container.get<Logger>('logger');
  const logger2 = container.get<Logger>('logger');

  logger.log('Hello');

  console.log(logger === logger2); // est-ce que logger est un singleton ?
}

/*

Conteneur de test
+----------+----------------------------+
| 'logger' |  obj de type Logger        |
+----------+----------------------------+
| 'writer' |  obj de type ConsoleWriter |
+----------+----------------------------+

Conteneur de prod
+----------+----------------------------+
| 'logger' |  obj de type Logger        |
+----------+----------------------------+
| 'writer' |  obj de type FileWriter    |
+----------+----------------------------+

*/
