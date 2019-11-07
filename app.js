const fs = require("fs");
const util = require("./utils");
const LOGFILE = "logs.txt";
let START = process.argv[2];

// const GUIDS = fs.readFileSync('GUIDS.csv', 'utf-8')
//     .toString() // convert Buffer to string
//     .split('\n') // split string to lines
//     .map(e => e.trim()) // remove white spaces for each line
//     .map(e => e.split(',').map(e => e.trim())); // split each line to array

const GUIDS = fs.readFileSync('GUIDS.csv', 'utf-8').split(",");
    
const logData = (batch, status, string) => {
  const log = `${util.timeStamp()} - ${status} processing batch number ${batch}
  ${string}
  `;
  fs.appendFile(LOGFILE, log, err => {
    if (err) throw err;
    console.log(log);
  });
};

let batch = 0;
let start = START ? START : 0;
const number = 10;
let end = start + number - 1;

const processBatch = (batch, start, number) => {
  const end = start + number;
  const arr = GUIDS.slice(start, end);
  console.log(`Processing batch ${batch} GUIDS ${start} - ${end}`);
  console.log(arr);
}
// number = 10
// 0-9
// 10 - 19
// 20 - 29
while (end < GUIDS.length) {
  batch++
  const arr = GUIDS.slice(start, end);
  console.log(`Processing batch ${batch} GUIDS ${start} - ${end} out of ${GUIDS.length} total GUIDS`);
  console.log(arr);
  start = end + 1;
  end = start - 1 + number;
}

// Process batches of 5 until all 100 have been processed

// [X] STEP 1 - Get a list of GUIDS in an array
// [ ] STEP 2 - Break up GUIDS into chunks of 100
// [ ] STEP 3 - Preform AJAX request on bulk update api for each chunk of 100
  // [X] b. - Log: time, batch, status, and GUIDS