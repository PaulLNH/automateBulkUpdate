exports.timeStamp = () => {
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