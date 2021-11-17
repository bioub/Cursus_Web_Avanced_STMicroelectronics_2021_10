import { ConsoleWriter } from "./ConsoleWriter";
import { FileWriter } from "./FileWriter";
import { Logger } from "./Logger";

// SOLID
// Single Responsability
// Open / Close
// Liskov Substitution
// Interface Segregation
// Dependency Inversion Principle

const writer = new ConsoleWriter();
const logger = new Logger(writer);

logger.log('Hello');


