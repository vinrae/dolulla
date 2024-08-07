const str = '123.45';
const regex = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
const result = str.match(regex);
console.log(result); // Output: ["123.45"]
