/*! profileperf v1.0.0 by ryanpcmcquen */

/*global module*/
/*jshint esversion:6*/

const profilePerf = function (name, fn, iters) {
  const args = Array.prototype.slice.call(arguments, 3);
  const i = [];
  i.length = iters || 500500;
  i.fill(0);
  const start = Date.now();
  i.map(() => {
    fn.apply(fn, args);
  });
  const end = Date.now();
  console.info(name + " took: " + (end - start));
};

module.exports = profilePerf;