const ArrayM = require("./ArrayClass");

const array = new ArrayM(3);

array.insert(0);
array.insert(1);
array.insert(15);
array.insert(2);
array.insert(3);
array.insertAt(17, 4);
array.insertAt(23, 0);
const intersection = array.intersect([1, 3, 17]);
console.log(intersection);
