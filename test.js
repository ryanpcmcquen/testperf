const testPerf = require('./index.js');
const flatMap = require('flatmap-fast');

testPerf('flatMapFast', flatMap, [
  [],
  [1],
  [2, 3]
], (i) => {
  return i + i;
});
