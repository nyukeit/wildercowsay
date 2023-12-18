const student = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
  text: `I am ${student.name}, wilder in ${student.campus}.`,
  e: 'oO',
  T: 'U ',
}));
