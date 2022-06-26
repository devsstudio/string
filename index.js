const { generateAlias } = require("./functions/string");
const { getJsonQuery, fromObject } = require("./functions/url");

exports.generateAlias = function (text) {
  return generateAlias(text);
};

exports.getJsonQuery = function (url) {
  return getJsonQuery(url);
};

exports.fromObject = function (params, skipobjects, prefix) {
  return fromObject(params, skipobjects, prefix);
};
