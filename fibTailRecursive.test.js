const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync("fibTailRecursive.js") + "");

let fibOne = 1;
assert(fibTR(1) == fibOne);

let fibTwo = 1;
assert(fibTR(2) == fibTwo);

let fibThree = 2;
assert(fibTR(3) == fibThree);

let fibFifteen = 610;
assert(fibTR(15) == fibFifteen);
