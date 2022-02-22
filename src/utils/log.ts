import chalk from 'chalk';

export enum LOG_LEVEL {
  Info = 'blue',
  Warning = 'yellow',
  Success = 'green',
  Error = 'red',
}

const log = (message: string | Error, level: LOG_LEVEL = LOG_LEVEL.Info) => {
  console.log(chalk[level](message));
};

export default log;
