#! /usr/bin/env node
import figlet from 'figlet';
import {program} from 'commander';
import parse from './commands/parse';

import log, {LOG_LEVEL} from './utils/log';

program
  .name('c2j')
  .usage('[command] [options]')
  .description('CLI to parse CSV files and output JSON')
  .version('0.1.4')
  .showHelpAfterError()
  .showSuggestionAfterError();

program
  .command('parse')
  .description('Parse a file')
  .argument('<path-to-file>', 'path to the file to parse')
  .usage('<path-to-file> [options]')
  .option(
    '-o, --output <output-path>',
    'path to output results to',
    'output.json',
  )
  .action(parse);

figlet(
  'see-ess-vee\nto-json',
  {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  },
  (err, data) => {
    if (err) {
      log('Something went wrong...', LOG_LEVEL.Error);
      console.dir(err);
      return;
    }
    log(data);
    program.parse(process.argv);
  },
);
