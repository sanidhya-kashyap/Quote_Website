const os = require("os");

// console.log(os.arch());

// console.log(os.freemem());

// const free_mem = os.freemem();
// console.log(`${free_mem/1024/1024/1024}`);

const total_mem = os.totalmem();
console.log(`${total_mem/1024/1024/1024}`);

console.log(os.hostname());
