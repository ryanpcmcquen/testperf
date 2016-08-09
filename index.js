/*! testperf v1.1.0 by ryanpcmcquen */

/*global module*/
/*jshint esversion:6*/

const testPerf = function (name, fn) {
  const args = Array.prototype.slice.call(arguments, 2);
  const i = [];
  i.length = 500500;
  i.fill(0);
  const start = performance.now();
  i.map(() => {
    fn.apply(fn, args);
  });
  const end = performance.now();
  console.log(name + " took: " + (end - start) + " milliseconds.");
};

module.exports = testPerf;
