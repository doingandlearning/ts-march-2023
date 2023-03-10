import {
  BestLoggerEver,
  Logger,
} from "../../../03-generics-and-classes/02-classes";

class LoggerManager {
  private loggers: Logger[] = [];

  public addLogger(logger: Logger): void {
    this.loggers.push(logger);
  }

  public log(): void {
    this.loggers.forEach((logger) => logger.log());
  }
}

const logger1: Logger = new BestLoggerEver("logger1", new Date(), "Irish");
const logger2: Logger = new BestLoggerEver("logger2", new Date(), "English");
const loggerManager = new LoggerManager();
loggerManager.addLogger(logger1);
loggerManager.addLogger(logger2);
loggerManager.log(); // "This will get called!"
