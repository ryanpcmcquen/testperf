/*! testperf v2.0.0 by ryanpcmcquen */
// @flow
'use strict';
let now;
try {
  (performance) && (now = () => {
    return performance.now()
  });
} catch (ignore) {
  now = () => {
    const t = process.hrtime();
    // Format `process.hrtime()` to match
    // `performance.now()`.
    return (t[0] * 1e3 + t[1]) / 1e6;
  };
}

const testPerf = function (name /*:String*/ , fn /*:Function*/ ) {
  const args = Array.prototype.slice.call(arguments, 2);
  const i = [];
  i.length = 500500;
  i.fill(0);
  const start = now();
  i.map(() => {
    fn.apply(fn, args);
  });
  const end = now();
  // Use commas to avoid confusing type inference.
  console.log('// =>', name, 'took:', (end - start), 'milliseconds.');
};

module.exports = testPerf;
