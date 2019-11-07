const fs = require("fs");

const getGUIDS = path => {
  let fileContent;

  return new Promise(resolve => {
    fileContent = fs.readFileSync(path, {encoding: 'utf8'});
    resolve(fileContent);
  })
};

const GUIDS = fs.readFileSync('GUIDS.csv', 'utf-8')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

const timeStamp = () => {
  const ts_hms = new Date();
  return ts_hms.getFullYear() +
    "-" +
    ("0" + (ts_hms.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + ts_hms.getDate()).slice(-2) +
    " " +
    ("0" + ts_hms.getHours()).slice(-2) +
    ":" +
    ("0" + ts_hms.getMinutes()).slice(-2) +
    ":" +
    ("0" + ts_hms.getSeconds()).slice(-2);
};

const logData = (file, string) => {
  const data = `${string},\n`;
  fs.appendFile(file, data, err => {
    if (err) throw err;
    console.log(`${timeStamp()}: Log file '${file}' located in '${__dirname}' has been updated...`);
    console.log(string);
  });
};

// logData("test.txt", "This is a test of the emergency node.js system.");
// console.log(getGUIDS(__dirname + "/GUIDS.csv"));
GUIDS.forEach(GUID => console.log(GUID));