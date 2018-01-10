const testPerf = require("./index.js")
const flatMap = require("flatmap-fast")

const testArr = ["Hi", "World"]
const splitWord = word => word.split("")

testPerf(
  "flatMapFast",
  flatMap,
  testArr,
  splitWord
)
