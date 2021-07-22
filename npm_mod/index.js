const chalk = require('chalk');
const validator = require('validator');

const result = validator.isEmail('foobar@gmail.com'); 
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result))
 
// console.log(chalk.blue.underline.inverse("Hello World"));

