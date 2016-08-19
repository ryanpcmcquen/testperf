/*! testperf v2.0.3 by ryanpcmcquen */
// @flow
'use strict';
let now;
try {
  (window.performance) && (now = () => {
    return window.performance.now();
  });
} catch (ignore) {
  now = (diff) => {
    return (diff) ? process.hrtime(diff) : process.hrtime();
  };
}
const timediff = (end, start) => {
  // Format `process.hrtime()` to match
  // `performance.now()`.
  return (start) ? (end - start) : ((end[0] * 1e3 + end[1]) / 1e6);
};

const testPerf = function (name /*:String*/ , fn /*:Function*/ ) {
  const args = Array.prototype.slice.call(arguments, 2);
  const i = [];
  i.length = 500500;
  i.fill(0);
  const start = now();
  i.map(() => {
    fn.apply(fn, args);
  });
  const end = now(start);
  // Use commas to avoid confusing type inference.
  console.log('// =>', name, 'took:', (timediff(end, start)), 'milliseconds.');
};

module.exports = testPerf;
