# testperf

An easy speed test for JavaScript.

Takes 2 arguments (`name`, `function`), and then any additional arguments are passed to the `function` being tested.

Example:

```javascript
const flatMap = require("flatmap-fast")

testPerf("flatMapFast", flatMap, [[], [1], [2, 3]], i => {
    return i + i
})

// => flatMapFast took: 466.762953 milliseconds.
```

As of `v2.0.3`, `node` and native browser JavaScript are supported, using either `performance.now()` or `process.hrtime()`. `process.hrtime()` is formatted to match `performance.now()`'s output'.
