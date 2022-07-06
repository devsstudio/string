const { generateAlias } = require("./functions/string");
const { getJsonQuery, generateQueryString } = require("./functions/url");

exports.generateAlias = function (text) {
  return generateAlias(text);
};

exports.getJsonQuery = function (url) {
  return getJsonQuery(url);
};

exports.generateQueryString = function (params, skipobjects, prefix) {
  return generateQueryString(params, skipobjects, prefix);
};
