#!/usr/bin/node
const myVar = process.argv;
if (Number(myVar[2]) !== 'undefined' && !isNaN(parseInt(myVar[2]))) {
  for (let i = 0; i < Number(myVar[2]); i++) { console.log('C is fun'); }
} else {
  console.log('Missing number of occurrences');
}
