import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

import write from '../scripts/write';
import log, {LOG_LEVEL} from '../utils/log';

function parse(inputPath, options) {
  const outputPath = options.output
    ? path.resolve(options.output)
    : path.resolve(__dirname, 'output.json');

  const rows: unknown[] = [];
  try {
    log(`Parsing ${inputPath}`);
    fs.createReadStream(path.resolve(inputPath))
      .pipe(csv.parse({headers: true}))
      .on('error', err => log(err, LOG_LEVEL.Error))
      .on('data', row => {
        rows.push(row);
      })
      .on('end', (rowCount: number) => {
        log(`Parsed ${rowCount} row(s)`, LOG_LEVEL.Success);
        write(rows, outputPath);
      });
  } catch (err) {
    log(err, LOG_LEVEL.Error);
  }
}

export default parse;
