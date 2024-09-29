exports.getJsonQuery = (url) => {
  const parts = url.split("?");

  if (parts.length > 1) {
    const querystring = require("querystring");

    const qs = parts[1];
    return querystring.parse(qs);
  }
};

exports.stringify = (parsed) => {
  const querystring = require("querystring");
  return querystring.stringify(parsed);
}
