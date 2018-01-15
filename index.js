/*! testperf v2.0.6 by ryanpcmcquen */
// @flow
"use strict"
let now
try {
    window.performance && (now = () => window.performance.now())
} catch (ignore) {
    now = diff => (diff ? process.hrtime(diff) : process.hrtime())
}
// Format `process.hrtime()` to match
// `performance.now()` (milliseconds).
const timediff = (end /*:any*/, start) =>
    typeof start === "number" ? end - start : end[0] * 1e3 + end[1] / 1e6

const testPerf = (name /*:String*/, fn /*:Function*/, ...args) => {
    const start = now()
    const test = Array(500500)
        .fill()
        .map(() => fn.apply(fn, args))
    const end = now(start)
    // Use commas to avoid confusing type inference.
    console.log("// =>", name, "took:", timediff(end, start), "milliseconds.")
}

module.exports = testPerf
