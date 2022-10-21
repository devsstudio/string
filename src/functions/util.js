exports.getDateCode = () => {
  var hrTime = process.hrtime();
  //console.log(hrTime);
  //console.log(hrTime[0] * 1000000 + hrTime[1] / 1000);

  return hrTime[0] + "" + (hrTime[1] / 100).toString();
};
