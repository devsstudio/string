exports.getJsonQuery = (url) => {
  const parts = url.split("?");

  if (parts.length > 1) {
    const querystring = require("querystring");

    const qs = parts[1];
    return querystring.parse(qs);
  }
};

const isObj = (a) => {
  if (!!a && a.constructor === Object) {
    return true;
  }
  return false;
};

const _st = (z, g) => {
  return "" + (g != "" ? "[" : "") + z + (g != "" ? "]" : "");
};

const _generateQueryStringRecursive = (params, skipobjects, prefix) => {
  if (skipobjects === void 0) {
    skipobjects = false;
  }
  if (prefix === void 0) {
    prefix = "";
  }
  var result = "";
  if (typeof params != "object") {
    return prefix + "=" + encodeURIComponent(params) + "&";
  }
  for (var param in params) {
    var c = "" + prefix + _st(param, prefix);
    if (isObj(params[param]) && !skipobjects) {
      result += _generateQueryStringRecursive(params[param], false, "" + c);
    } else if (Array.isArray(params[param]) && !skipobjects) {
      params[param].forEach(function (item, ind) {
        result += _generateQueryStringRecursive(
          item,
          false,
          c + "[" + ind + "]"
        );
      });
    } else {
      result += c + "=" + encodeURIComponent(params[param]) + "&";
    }
  }
  return result;
};

const _generateQueryString = (params, skipobjects, prefix) => {
  var querystring = _generateQueryStringRecursive(params, skipobjects, prefix);

  if (querystring.endsWith("&=")) {
    return querystring.substring(0, querystring.length - 2);
  } else {
    return querystring;
  }
};
exports.generateQueryString = _generateQueryString;
