export default class UrlHelper {
  static isObj(a: any) {
    if (!!a && a.constructor === Object) {
      return true;
    }
    return false;
  }

  static _st(z: string, g: string) {
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
}
