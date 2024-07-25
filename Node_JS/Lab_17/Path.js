const path = require('path');

console.log("");
console.log(path.normalize('/krisha/maheshbhai/../busa'));
console.log("");
console.log(path.join('/krisha','/busa'));
console.log("");
console.log(path.resolve('krisha','busa'));
console.log("");
console.log(path.relative('/abc/xyz','/klm/mno'));
console.log("");
console.log(path.relative('/abc/xyz','/abc/pqr'));
console.log("");
console.log(path.dirname('/krisha/busa.txt'));
console.log("");
console.log(path.basename('/krisha/busa.exe'));
console.log("");
console.log(path.extname('/krisha/busa.java'));
console.log("");