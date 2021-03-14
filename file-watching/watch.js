const fs = require('fs');
const file = "./file.txt";
const moment = require('moment');
const time = moment().format("MMMM Do YYYY, h:mm:ss a");



  return console.log(`${file} updated ${time}`);
