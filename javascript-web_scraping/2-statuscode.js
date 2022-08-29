#!/usr/bin/node
const request = require('request');
const url = process.argv.slice(2);

request(url[0], function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
