const fs = require('fs');
const { Transform } = require("stream");

const rs = fs.createReadStream("./file.txt");

const newFile = fs.createWriteStream("./newFile.txt");
const uppercase = new Transform({
  transform(chunk, encoding, callback){
    //Data processing
    callback(null, chunk.toString().toUpperCase());
  },
});

//chain all of our streams together

rs.pipe(uppercase).pipe(newFile);
