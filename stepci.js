import { runFromFile } from '@stepci/runner';

runFromFile('./tests/api.test.ts')
  .then(console.log)
  .catch(console.error);
