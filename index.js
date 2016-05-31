/*! testperf v1.0.1 by ryanpcmcquen */

/*global module*/
/*jshint esversion:6*/

const testPerf = function (name, fn) {
  const args = Array.prototype.slice.call(arguments, 2);
  const i = [];
  i.length = 500500;
  i.fill(0);
  const start = Date.now();
  i.map(() => {
    fn.apply(fn, args);
  });
  const end = Date.now();
  console.log(name + " took: " + (end - start));
};

module.exports = testPerf;
