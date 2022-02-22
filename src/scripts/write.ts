import * as fs from 'fs';

import log, {LOG_LEVEL} from '../utils/log';

function write(rows: unknown[], outputPath: string) {
  log(`Writing ${outputPath}`);

  fs.writeFile(outputPath, JSON.stringify(rows), err => {
    if (err) {
      log(err, LOG_LEVEL.Error);
    }
    log('Done. Thanks for using see-ess-vee-to-json!', LOG_LEVEL.Success);
  });
}

export default write;
