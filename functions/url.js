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

exports.fromObject = (params, skipobjects, prefix) => {
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
      result += this.fromObject(params[param], false, "" + c);
    } else if (Array.isArray(params[param]) && !skipobjects) {
      params[param].forEach(function (item, ind) {
        result += this.fromObject(item, false, c + "[" + ind + "]");
      });
    } else {
      result += c + "=" + encodeURIComponent(params[param]) + "&";
    }
  }
  return result;
};
