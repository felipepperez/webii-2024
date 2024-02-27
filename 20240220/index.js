const S = require('string');
const color = require('colors');
const moment = require('moment');

console.log(S('teste testando').between('tes','ando').s.magenta.bgWhite);
console.log(S('substring').contains('sub'),S('essa').contains('sub').toString().magenta);

let now = moment().add('1','day').subtract('1','month').format('DD/MM/YYYY');
console.log(now);

now = moment();
let tomorrow = moment().add('1','months');
console.log(tomorrow.diff(now,'seconds'));