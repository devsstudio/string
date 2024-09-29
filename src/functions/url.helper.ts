export default class UrlHelper {

  private static isObj(a: any) {
    if (!!a && a.constructor === Object) {
      return true;
    }
    return false;
  }

  private static _st(z: string, g: string) {
    return '' + (g != '' ? '[' : '') + z + (g != '' ? ']' : '');
  }

  static fromObject(params: any, skipobjects?: any, prefix?: any) {
    if (skipobjects === void 0) {
      skipobjects = false;
    }
    if (prefix === void 0) {
      prefix = '';
    }
    var result = '';
    if (typeof params != 'object') {
      return prefix + '=' + encodeURIComponent(params) + '&';
    }
    for (var param in params) {
      var c = '' + prefix + UrlHelper._st(param, prefix);
      if (UrlHelper.isObj(params[param]) && !skipobjects) {
        result += UrlHelper.fromObject(params[param], false, '' + c);
      } else if (Array.isArray(params[param]) && !skipobjects) {
        params[param].forEach(function (item: any, ind: any) {
          result += UrlHelper.fromObject(item, false, c + '[' + ind + ']');
        });
      } else {
        result += c + '=' + encodeURIComponent(params[param]) + '&';
      }
    }
    return result;
  }

  static generateQueryString = (params: any, skipobjects?: any, prefix?: any) => {
    var querystring = UrlHelper.fromObject(params, skipobjects, prefix);

    if (querystring.endsWith("&")) {
      return querystring.substring(0, querystring.length - 1);
    } else {
      return querystring;
    }
  }
}
