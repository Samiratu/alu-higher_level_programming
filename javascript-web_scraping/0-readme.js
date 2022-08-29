#!/usr/bin/node
const { exec } = require('child_process');
const myVar = process.argv.slice(2);
exec('cat myVar', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
